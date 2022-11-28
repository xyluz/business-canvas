const express = require("express");
const bodyParser = require("body-parser");

const router = require("./routers/homeRouter")
const connection = require("./database/db")

const app = express();
connection()

// test route

app.use("/", router);

// start server
app.listen(3000, () => {
    console.log("Server is listening on port 3000.");
});