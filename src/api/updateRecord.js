const Airtable = require("airtable")

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  //Your API Key from Airtable
  apiKey: process.env.AIRTABLE_API_KEY,
})

// Your Table ID from Airtable
const database = Airtable.base(process.env.AIRTABLE_TABLE_ID)

export default async function handler(req, res) {
    
    const {recordId} = req.body
    
    if (!recordId){
        res.status(400).json({message: 'Record Id is required'})
    } else {
        try {
            database('Online Registrations').update([
                {
                "id": recordId,
                "fields": {
                    "Complete Payment": true
                }
                }
            ], (err, records) => {
                if (err) {
                    res.json({
                        message: "Error adding record to Airtable.",
                        error: err.message,
                      })
                } else {
                    res.status(200).json({ message: `Thank you for your complete registration`})
                }
            });
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
    
}