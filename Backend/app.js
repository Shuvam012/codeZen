const express = require("express")
const app = express()
const port = 8000
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')



connectDB()
app.get('/' , (req, res)=>{
    res.send('hello world')
})

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/api/user', userRoutes)


app.listen(port,()=>{
    console.log(`app lisiten ${port}`)
})