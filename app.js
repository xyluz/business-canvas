const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

// Dot env
const dotenv = require('dotenv');
dotenv.config();

const DATABASE = require("./models/homeModels");
const router = require("./routers/homeRouter");
const SEND_EMAIL = require('./utils/sendEmail');
const userRoute = require("./routers/userRoute");

const app = express();


//JUST ADDED
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

// test route
app.use("/", userRoute);
app.use("/login", userRoute);
app.use("/reset-password", userRoute);


//Connecting server
// mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
//     console.log("Connected to db!");
//     app.listen(3000, () => console.log("Server Up and running"));
//     });

//Using function SEND_EMAIL
//email: the recipient email address
//subject: the subject or title of the mail
//text: the content of the mail
// The 3 parameters must be in string format for it to work.
// SEND_EMAIL(email, subject, text);
