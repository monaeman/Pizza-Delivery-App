const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')

const protect = asyncHandler(async(req, res, next) => {
    let token
// checking for authirization header making sure it's a bearer token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            //get token from header
            token = req.headers.authorization.split(' ')[1]

            //Verify token
const decoded = jwt.verify(token, process.env.JWT_SECRET)


//Get user from the token
req.user = await User.findById(decoded.id).select('-password')

//calling next peice of middleware
next()

//if there is an error 
        }catch (error){
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')

            }
        }

        // if there no token at all 
        if(!token) {
            res.status(401)
            throw new Error('Not authorized, np token')
        }
    }
)

module.exports = { protect}