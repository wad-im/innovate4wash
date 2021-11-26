import Stripe from "stripe"
import createError from "http-errors";
import Airtable from "airtable"

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY,
})
const database = Airtable.base(process.env.AIRTABLE_TABLE_ID)

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {

  console.log(`${req.baseUrl} - ${req.method}`);

  try {
    if (req.method === "POST") {
      await createStripeSession(req, res);
    } else if (req.method === "GET") {
      await fetchStripeSession(req, res);
    } else {
      console.log(`${req.method} not allowed`);
    }
  } catch (error) {
    const status = error.response?.status || error.statusCode || 500;
    const message = error.response?.data?.message || error.message;

    // Something went wrong, log it
    console.error(`${status} -`, message);

    // Respond with error code and message
    res.status(status).json({
      message: error.expose ? message : `Faulty ${req.baseUrl}`,
    });
  }
}

const createStripeSession = async (req, res) => {
    const {successUrl, cancelUrl, email, recordId} = req.body
    
    
    const session = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        payment_method_types: ["card"],
        line_items: [
          {
            price: process.env.STRIPE_PRICE_ID,
            quantity: 1,
          },
        ],
        mode: "payment",
        customer_email: email,
        metadata: {
          dbRecordId: recordId,
        },
      });
      res.json({ url: session.url })
}

const fetchStripeSession = async (req, res) => {

  const {sessionId} = req.query

  
const sessionFromStripe = await stripe.checkout.sessions.retrieve(sessionId);
const {dbRecordId} = sessionFromStripe.metadata


if (sessionFromStripe.payment_status !== "paid") {
  throw createError(402, "Payment still required");
} 

if (!dbRecordId){
  res.status(400).json({message: 'Record Id is required'})
} else {
  database('Online Registrations').update([
    {
    "id": dbRecordId,
    "fields": {
        "Complete Payment": true
    }
    }
], (err, records) => {
    if (err) {
        res.json({
            message: "Error updating record to Airtable.",
            error: err.message,
          })
    } else {
        const username = records[0].get('Name')
        const firstName = username.split(' ')[0]
        res.status(200).json({ message: `Thank you for your registration`, registrationName: firstName})
    }
});
}


}


  
