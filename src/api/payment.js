import Stripe from "stripe"

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
    
    try {
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
    
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const fetchStripeSession = async (req, res) => {

  const {sessionId} = req.query

  try {
    const sessionFromStripe = await stripe.checkout.sessions.retrieve(sessionId);
    const {dbRecordId} = sessionFromStripe.metadata

    
    if (sessionFromStripe.payment_status !== "paid") {
      console.log("Payment required")
    } else {
      res.status(200).json({
        message: "you successfully registered",
        recordId: dbRecordId,
      });
    }
  } catch (error) {
      console.log(error)
  }

}


  
