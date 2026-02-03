// const mongoose = require('mongoose');
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb+srv://shuvam012:FhWzyOckwTFYeV7M@myprojects.wq7bmiu.mongodb.net/codeZen`, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true

        });
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

// module.exports = connectDB;

export default connectDB