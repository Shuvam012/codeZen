// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import bcrypt from "bcryptjs";

// import User from '../models/User.js';
// import connectDB from "../config/db.js";

// dotenv.config();


// // mongoose connection
// // const connectDB = async () => {
// //     try {
// //         await mongoose.connect(process.env.MONGO_URI )
// //         console.log("MongoDB connected");
// //     } catch (error) {
// //         console.error("MongoDB connection failed:", error.message);
// //         process.exit(1);
// //     }
// // };


// const createAdmin = async () => {
//     try {
//         await connectDB();  

//         const adminEmail = process.env.ADMIN_EMAIL;
//         const adminPassword = process.env.ADMIN_PASSWORD;

//         if (!adminEmail || !adminPassword) {
//             console.error("Admin email or password not set in environment variables");
//             process.exit(1);
//         }

//         const existingAdmin = await User.findOne({ email: adminEmail });
//         if (existingAdmin) {
//             console.log("Admin user already exists");
//             process.exit(0);
//         }
//         const hashedPassword = await bcrypt.hash(adminPassword, 12);

//         await User.create({
//             name: "Admin",
//             email: adminEmail,
//             password: hashedPassword,
//             role: "admin",
//         });

//         console.log("Admin user created successfully");
//         process.exit(0);
//     } catch (error) {
//         console.error("Error creating admin user:", error);
//         process.exit(1);
//     }
// };

// createAdmin();



import dotenv from "dotenv";
import User from "../models/User.js";
import connectDB from "../config/db.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await connectDB();

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      console.error("❌ Admin email or password missing in .env");
      process.exit(1);
    }

    const existingAdmin = await User.findOne({ email: adminEmail });
    if (existingAdmin) {
      console.log("⚠️ Admin already exists");
      process.exit(0);
    }

    await User.create({
      name: "Admin",
      email: adminEmail,
      password: adminPassword, // 🔐 hashed in User.js
      role: "admin",
    });

    console.log("✅ Admin created successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error creating admin:", error.message);
    process.exit(1);
  }
};

createAdmin();
