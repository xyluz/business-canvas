const bcrypt = require("bcrypt");
const User = require("../models/userModel");

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
