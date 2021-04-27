
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


sendEmail = (body) => {
    sgMail.send({
        to: process.env.RECIPIENT_EMAIL,
        from: process.env.SENDER_EMAIL, 
        subject: `New Message from Candid Cakery Website.`,
        text: `From: ${body.name}. Their email address is: ${body.email}. Message: ${body.message}`
      
    })
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}




module.exports = sendEmail