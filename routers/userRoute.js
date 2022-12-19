const express = require("express");
const controller = require("../controllers/userController");

const router = express.Router();



router.post("/", controller.registerUser);
router.post("/login", controller.loginUser);
router.post("/reset-password", controller.resetPassword);

module.exports = router;
