//userController

const User = require('../models/userModel');

const createUser = async (req, res) => {
    const { fullName, phoneNumber, email, password } = req.body;
    try {
        const user = await User.create({ fullName, phoneNumber, email, password });
        res.status(201).json({
            success: true,
            msg: "User Created",
            user});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }   
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
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