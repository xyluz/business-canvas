const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connection = async() => {
	try {
		await mongoose.connect(process.env.DB_CONNECT)
		console.log('Connected to MongoDB');		
	} catch (err) {
		console.log(err);
	}
}

module.exports = connection;