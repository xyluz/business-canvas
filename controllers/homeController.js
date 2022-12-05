const express = require("express");
const { Home } = require("../models/homeModels");
const { v4: uuid } = require("uuid");
const { userInfo } = require("os");


const app = express();

exports.getHome = app.get("/", (req, res, next) => {
    res.send("Hi, welcome to Business Model Canvas!");
});

