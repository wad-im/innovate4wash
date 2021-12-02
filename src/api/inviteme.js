import Airtable from "airtable"
import Sendgrid from '@sendgrid/mail'
import createError from "http-errors";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY,
})

const database = Airtable.base(process.env.AIRTABLE_TABLE_ID)

Sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {

    const {values} = req.body

    if (!values) {
        res.status(400).json({message: 'Registration information required'})
    } else {
        try {

          database("Invitation Requests").create(
              [
                {
                  fields: {
                    "Name": values.fullName,
                    "Organization": values.organization,
                    "Email": values.email,
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
                  const username = records[0].get('Name')
                  const firstName = username.split(' ')[0]
                  const userEmail = records[0].get('Email')
                  const userOrganization = records[0].get('Organization')
                  res.status(200).json({ message: `Thank you for your interest to join Innovate4WASH`, registrationName: firstName})

                  // send confirmation email

                  const message = {
                    to: userEmail,
                    from: {
                        name: 'Wadim from Innovate4WASH',
                        email: process.env.SENDGRID_AUTHORIZED_EMAIL,
                    }, 
                    templateId: 'd-a1446dfd3676447497d88a1f56c72e8e',
                    dynamicTemplateData: {
                        subject: 'Thanks for registering for Innovate4WASH 2022',
                        name: firstName,
                        organization: userOrganization

                    },
                  };
          
                  try {
                      await Sendgrid.send(message);
                  } catch (error) {
                      console.log(error)
                      res.status(500).json({message: "There was an error"})
                  }
                }
              }
          )
          } catch (error) {
              res.status(500).json({message: error.message})
          }
    }

}
