const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
sgMail.send({
    to:email,
    from:'ohanyanhayk4work@gmail.com',
    subject:'Thanks',
    text:`Welcome, ${name}.How are you?`
})
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to:email,
        from:'ohanyanhayk4work@gmail.com',
        subject:'Cancelation',
        text:`Welcome, ${name}.Who do you cancel your account?`
    })
    }

module.exports ={
    sendWelcomeEmail,
    sendCancelEmail
}