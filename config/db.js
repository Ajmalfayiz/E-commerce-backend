
const mongoose = require("mongoose")

const connectdb = async () => {
    try {
        const conn = await mongoose.connect(process.env.mongodb_URI)

        console.log(`MongoDB Connected ${conn.connection.host}/ ${conn.connection.name}`);

    } catch (error) {
        console.log(`MongoDB connection error: ${error.message}`);
        process.exit(1)

    }
}


module.exports = connectdb