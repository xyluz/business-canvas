
'use strict';
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();


// // function that sends email
async function sendEmail() {

    // reusable transporter object using the default SMPT transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,// use SSL
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        },
    });
    
    
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'process.env.EMAIL_USERNAME', //sender email address
        to: 'hoduola5@gmail.com', //Reveiver(s) email address
        subject: "Testing Nodemailer!", //subject of the mail
        text: "Hey there, testing nodemailer!?", // plain text body
        html: "<b>Hey there, testing nodemailer!</b>", //html body 
    });
    
    
    console.log("Message successfully sent: %s", info.messageId); //confirm message sent
    
    //Preview only availble when sending through Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info)); //false, reason above 
    };
        
    
    sendEmail().catch(console.error); //calling message function
    
    module.exports = sendEmail; //to be available elsewhere within the folder