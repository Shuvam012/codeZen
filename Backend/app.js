
import express from "express"
import cookieParser from "cookie-parser"


const port = 3000
import cors from "cors"
import connectDB from "./src/config/db.js"

import authRoutes from "./src/routes/authRoutes.js"
import adminQuizRoutes from "./src/routes/adminQuizRoutes.js"
import quizAttemptRoutes from "./src/routes/quizAttemptRoutes.js"
import leaderboardRoutes from "./src/routes/leaderboardRoutes.js"

connectDB()

const app = express()
app.use(cookieParser())
app.use(express.json()) 

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))






app.get('/' , (req, res)=>{
    res.send('hello world')
})

// for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.use('/api/auth', authRoutes)
app.use('/api/admin/quizzes', adminQuizRoutes)
app.use('/api/quiz', quizAttemptRoutes)
app.use("/api/leaderboard", leaderboardRoutes);



app.listen(port,()=>{
    
    console.log(`Server running at http://localhost:${port}`);
})