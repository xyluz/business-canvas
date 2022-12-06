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
