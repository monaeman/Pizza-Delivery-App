const express = require('express')
const dotenv= require('dotenv').config()
const port = process.env.PORT || 5003

const app = express()

app.get('/api/orders',(req, res)=> {
    res.send('Get orders')
})

app.listen(port, ()=> console.log(`Server started on port ${port}`))