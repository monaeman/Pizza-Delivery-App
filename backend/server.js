const path = require('path');
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
app.use('/api/users', require('./routes/userRoutes'))

//serve frontend
if(process.env.NODE_ENV === 'production'){
   // Serve static files from the frontend build directory
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  // Serve the frontend's HTML file for all routes (client-side routing)
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    );
  } else {
  
    // In non-production environments, respond with a message to set to production
    app.get('/', (req, res) => res.send('Please set to production'));
  }
  // Use the errorHandler middleware to handle errors
//will overwrite the default express errorHandler
app.use(errorHandler)

app.listen(port, ()=> console.log(`Server started on port ${port}`))