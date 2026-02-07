import dotenv from "dotenv";
dotenv.config();

import User from "../models/User.js";
import jwt from 'jsonwebtoken'

 
const register = async (req,res) =>{
    try{
        const {name,email,password} = req.body

        const userExists = await User.findOne({email})
        if(userExists){
            res.status(400)
            throw new Error({ message:'User already exists'})
        }

        await User.create({
            name,
            email,
            password
        })

        res.status(201).json({message:'User created successfully'})
    }catch(error){
        res.status(500).json({message:'Internal server error'
            , error
        })
    }
    }


    // const login = async (req,res) =>{
    //     try{
    //         const {email,password} = req.body

    //         const user = await User.findOne({email})

    //         if(!user){
    //             res.status(400)
    //             throw new Error({ message:'User does not exist'})
    //         }

    //         const isMatch = await user.matchPassword(password)

    //         if(!isMatch){
    //             res.status(400)
    //             throw new Error({ message:'Invalid credentials'})
    //         }


    //         //jwt
    //         const token = jwt.sign(
    //             {id:user._id},
    //             process.env.JWT_SECRET,
    //             {expiresIn:'7d'}
    //         )

    //         //cookes
    //         res.cookie('token',token,{
    //             httpOnly:true,
    //             secure:false,
    //             sameSite:'none',
    //             maxAge:7*24*60*60*1000

    //         })

    //         res.status(200).json({
    //             _id:user._id,
    //             name:user.name,
    //             email:user.email,
    //             role:user.role,
    //             message:'Login successful'})
            
    //     }catch(error){
    //     res.status(500).json({message:'Internal server error',
    //         error
    //     })
    // }
    // } 

   const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please provide email and password" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT
    const token = jwt.sign({ id: user.id ,role:user.role}, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Send token in cookie
    res.cookie("token", token, {
      httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
      secure: false,
      // sameSite: "strict",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      message: "Login successful",
    });
  } catch (error) {
    console.error("Login Error:", error); // 🔥 log full error
    res.status(500).json({ message: "Internal server error", error });
  }
};


const logout = async (req, res) => {
    try {
      res.clearCookie("token");
      res.status(200).json({ message: "Logout successful" });
    } catch (error) {
      console.error("Logout Error:", error); // 🔥 log full error
      res.status(500).json({ message: "Internal server error", error });
    }
  };


 const getMe = (req, res) => {
  res.status(200).json({
    id: req.user.id,
    role: req.user.role,
  });
};




    export {register,login,logout,getMe}