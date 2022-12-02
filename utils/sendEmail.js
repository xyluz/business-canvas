'use strict';
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();


// function that sends email
const sendEmail = async (email, subject, text) => {
    try {
        // reusable transporter object using the default SMPT transport
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            },
        });

        await transporter.sendMail({
            from: process.env.USER, //sender email address
            to: email,              //Reveiver(s) email address
            subject: subject,       //subject of the mail
            text: text,             //plain text body
        });

        console.log("Message successfully sent."); //confirm message sent
    } catch (error) {
        console.log(error, "email not sent");
    }
};


module.exports = sendEmail;

