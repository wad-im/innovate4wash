import Airtable from "airtable"
import axios from "axios"

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY,
})

const database = Airtable.base(process.env.AIRTABLE_TABLE_ID)

export default async function handler(req, res) {

    const {values, location} = req.body

    if (!values) {
        res.status(400).json({message: 'Registration information required'})
    } else {
        try {
            database("Registrations").create(
                [
                  {
                    fields: {
                      "Name": values.fullName,
                      "Organization": values.organization,
                      "Email": values.email,
                      "Complete Registration": true,
                      "Registration Type": "Online Registration"
                    },
                  },
                ],
                async (err, records) => {
                  if (err) {
                    res.json({
                      message: "Error adding record to Airtable.",
                      error: err.message,
                    })
                  } else {
                    const recordId = records[0].getId()
                    
                    const response = await axios.post(`${location.origin}/api/payment`, {
                      email: values.email,
                      cancelUrl: `${location.origin}/`,
                      successUrl: `${location.origin}/registration/?sessionId={CHECKOUT_SESSION_ID}`,
                      recordId: recordId
                    })
                    const sessionUrl = response.data.url
                    res.status(200).json({ message: `Thank you for your registration`, url: sessionUrl})
                  }
                }
              )
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
  }
