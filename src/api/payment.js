import Stripe from "stripe"
import createError from "http-errors";
import Airtable from "airtable"
import Sendgrid from '@sendgrid/mail'

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY,
})
const database = Airtable.base(process.env.AIRTABLE_TABLE_ID)

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

Sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

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
], async (err, records) => {
    if (err) {
        res.json({
            message: "Error updating record to Airtable.",
            error: err.message,
          })
    } else {
        const username = records[0].get('Name')
        const firstName = username.split(' ')[0]
        const userEmail = records[0].get('Email')
        res.status(200).json({ message: `Thank you for your registration`, registrationName: firstName})

        // send confirmation email

        const message = {
          to: userEmail,
          from: {
            name: 'Wadim from Innovate4WASh',
            email: process.env.SENDGRID_AUTHORIZED_EMAIL,
          }, 
          subject: 'Thank you for registering for Innovate4WASH',
          text: `Dear ${firstName}, thank you registering for Innovate4WASH in Kisumu. We are looking forward to see you from January 27-28, 2022.`,
          html: `<p>Dear ${firstName}, thank you registering for Innovate4WASH in Kisumu. We are looking forward to see you from January 27-28, 2022.</p>`,
        };
  
        try {
            await Sendgrid.send(message);
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "There was an error"})
        }
    }
});
}


}


  
