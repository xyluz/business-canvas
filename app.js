const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const nodemailer = require("nodemailer");

const router = require("./routers/homeRouter");
const userRouter = require("./routers/userRoute");
const connection = require("./database/db");
const SEND_EMAIL = require("./utils/sendEmail");

const app = express();
connection();

// test route
app.use("/", router);
app.use("/api/users", userRouter);

// Start server
app.listen(3000, () => console.log("Server Up and running"));

//Using function SEND_EMAIL
//email: the recipient email address
//subject: the subject or title of the mail
//text: the content of the mail
// The 3 parameters must be in string format for it to work.
// SEND_EMAIL(email, subject, text);
