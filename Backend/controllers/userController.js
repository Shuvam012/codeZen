//userController
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

// console.log("Request body received:", req.body);



// signup user
// const createUser = async (req, res) => {
//     const { fullName, phoneNumber, email, password } = req.body;
//     try {
//         // Hash the password before saving it to the database
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // const user = await User.create({ fullName, phoneNumber, email, hashedPassword });
//         const user = await User.create({ fullName, phoneNumber, email, password: hashedPassword });

//         res.status(201).json({
//             success: true,
//             msg: "User Created",
//             user});
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// }

// signup user
const createUser = async (req, res) => {
    console.log("Request body received:", req.body);
    const { fullName, phoneNumber, email, password } = req.body;

    try {
        // Check if all required fields are present
        if (!fullName || !phoneNumber || !email || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Check if user with the same email or phone already exists
        const existingUser = await User.findOne({ $or: [{ email }, { phoneNumber }] });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email or phone number already exists." });
        }

        // Hash the password before saving it to the database
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the user with correct field names
        const user = await User.create({
            fullName,
            phoneNumber,
            email,
            password: hashedPassword, 
        });

        res.status(201).json({
            success: true,
            msg: "User Created Successfully",
            user,
        });
    } catch (error) {
        console.error("Signup error:", error.message);
        res.status(400).json({ message: error.message || "Signup failed." });
    }
};


// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare the hashed password with the provided password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        // if (user.password !== password) {
        //     return res.status(401).json({ message: "Invalid credentials" });
        // }
        res.status(200).json({ message: "Login successful", user });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get user by email
const getUserByEmail = async (req, res) => {
    const { email } = req.params;
    try {
        const user = await User.find({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


module.exports = {
    createUser,
    getAllUsers,
    getUserByEmail,
    loginUser
}