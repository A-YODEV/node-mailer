const express = require('express')
const nodemailer = require("nodemailer");
const app = express()
require("dotenv").config();
const port = 3050


app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
})

//Create a Transporter object
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });

  //Create a MailOptions Object
  const mailOptions = {
    from: 'tomerpacific@gmail.com',
    to: 'ayodele466@gmail.com',
    subject: 'Nodemailer Project',
    text: 'Hi from your nodemailer project'
  };


  //Use the Transporter.sendMail method
  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });