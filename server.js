const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000
const colors = require('colors')
const connectDB = require('./config/db')
const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require('./routes/userRoutes')
const {errorHandler} = require('./middleware/errorMiddleware')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/api/goals',goalRoutes)
app.use('/api/users',userRoutes)

app.use(errorHandler)

app.listen(port, () => console.log(`Server Started on Port ${port}`))