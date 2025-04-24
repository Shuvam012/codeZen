const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb+srv://shuvam012:NBi5A6lI5Nsd6wOh@codezen.qw01skz.mongodb.net/codeZen`, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true

        });
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;