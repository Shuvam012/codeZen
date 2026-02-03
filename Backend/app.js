
import express from "express"
import cookieParser from "cookie-parser"


const port = 3000
import cors from "cors"
import connectDB from "./src/config/db.js"

import authRoutes from "./src/routes/authRoutes.js"
import adminQuizRoutes from "./src/routes/adminQuizRoutes.js"

connectDB()

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(cookieParser())




app.get('/' , (req, res)=>{
    res.send('hello world')
})

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.use('/api/auth', authRoutes)
app.use('/api/admin/quizzes', adminQuizRoutes)


app.listen(port,()=>{
    
    console.log(`Server running at http://localhost:${port}`);
})