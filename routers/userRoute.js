const express = require("express");
const controller = require("../controllers/userController");

const router = express.Router();

router.post("/", controller.registerUser);
router.post("/login", controller.loginUser);
router.put("/change_password/:id", controller.changePassword);

module.exports = router;
