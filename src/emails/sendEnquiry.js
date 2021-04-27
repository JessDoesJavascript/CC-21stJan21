const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


sendEnquiry = (body) => {
    sgMail.send({
        to: process.env.RECIPIENT_EMAIL,
        from: process.env.SENDER_EMAIL, 
        subject: `New Order Enquiry from ${body.name}`,
        text: `Order enquiry from: ${body.name}. Email: ${body.email}. Phone number: ${body.phoneNumber}.`,
        html: `
        <h2> Name </h2>
        <p> ${body.name}</p>
        <h2> Email </h2>
        <p> ${body.email} </p>
        <h2> Phone </h2>
        <p> ${body.phoneNumber}</p>
        <h2>Event Date</h2>
        <p>${body.eventDate}</p>
        <h2> Date that cake needs to be ready </h2>
        <p>${body.dateForCake}</p>
        <h2>Event Type</h2>
        <p>${body.eventType}</p>
        <h2>Message</h2>
        <p>${body.message}</p>
        `
    })
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}




module.exports = sendEnquiry