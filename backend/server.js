const express = require('express')
const dotenv= require('dotenv').config()
const  {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5001
const connectDB = require('./config/db')


connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/orders', require('./routes/orderRoutes'))

//will overwrite the default express errorHandler
app.use(errorHandler)

app.listen(port, ()=> console.log(`Server started on port ${port}`))