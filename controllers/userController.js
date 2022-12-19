const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const Joi = require("joi");
const sendEmail = require("../utils/sendEmail");


const Token = require("../models/tokenModel");
const crypto = require("crypto");
const express = require("express");
const router = express.Router();

exports.registerUser = async (req, res) => {
	try {
		const { fullName, email, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);

		const checkEmail = await User.findOne({ email: email });
		if (checkEmail) {
			return res.status(400).json({
				message: "Email already exists",
			});
		}
		const newUser = await User.create({
			fullName,
			email,
			password: hashedPassword,
		});

		return res.status(201).json({
			message: "User created successfully",
			user: newUser,
		});
	} catch (err) {
		console.error(err);
		return res
			.status(500)
			.json({ message: "An error occurred, please contact Admin" });
	}
};

exports.loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;
		const findUser = await User.findOne({ email: email });
		if (!findUser) {
			return res
				.status(404)
				.json({ message: "Invalid Email or Password" });
		}

		const passMatch = await bcrypt.compare(password, findUser.password);
		if (!passMatch) {
			return res
				.status(404)
				.json({ message: "Invalid Email or Password" });
		}

		return res
			.status(200)
			.json({ message: "User Successfully Logged In", user: findUser });
	} catch (err) {
		console.log(err);
		return res
			.status(500)
			.json({ message: "An error occurred, please contact Admin" });
	}
};


// Reset Password
exports.resetPassword = async (req, res) => {
	try {
        const schema = Joi.object({ email: Joi.string().email().required() });
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const user = await User.findOne({ email: req.body.email });
        if (!user)
            return res.status(400).send("user with given email doesn't exist");

        let token = await Token.findOne({ userId: user._id });
        if (!token) {
            token = await new Token({
                userId: user._id,
                token: crypto.randomBytes(32).toString("hex"),
            }).save();
        }

        const link = `${process.env.BASE_URL}/password-reset/${user._id}/${token.token}`;
        await sendEmail(user.email, "Password reset", link);

        res.send("password reset link sent to your email account");
    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
};

router.post("/:userId/:token", async (req, res) => {
    try {
        const schema = Joi.object({ password: Joi.string().required() });
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const user = await User.findById(req.params.userId);
        if (!user) return res.status(400).send("invalid link or expired");

        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token,
        });
        if (!token) return res.status(400).send("Invalid link or expired");

        user.password = req.body.password;
        await user.save();
        await token.delete();

        res.send("password reset sucessfully.");
    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
});

  