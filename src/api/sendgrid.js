const sendgrid = require("@sendgrid/mail")

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {

    const {userEmail} = req.body

    const message = {
        to: {userEmail},
        from: process.env.SENDGRID_AUTHORIZED_EMAIL, 
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };

    try {
        await sendgrid.send(message);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "There was an error"})
    }

}

