require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })

const Airtable = require("airtable")

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  //Your API Key from Airtable
  apiKey: process.env.AIRTABLE_API_KEY,
})

// Your Table ID from Airtable
const database = Airtable.base(process.env.AIRTABLE_TABLE_ID)

export default async function handler(req, res) {

    const {values} = req.body

    if (!values) {
        res.status(400).json({message: 'Registration information required'})
    } else {
        try {
            database("Online Registrations").create(
                [
                  {
                    fields: {
                      Name: values.fullName,
                      Organization: values.organization,
                      Email: values.email,
                    },
                  },
                ],
                (err, records) => {
                  if (err) {
                    res.json({
                      message: "Error adding record to Airtable.",
                      error: err.message,
                    })
                  } else {
                    res.status(200).json({ message: `Thank you for your registration` })
                  }
                }
                
              )

        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
  }