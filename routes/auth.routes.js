const express = require('express')
const catchAsync = require('../utils/catchAsync')
const User = require("../modelsDB/userModel")
const AppError = require('../utils/appError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const router = express.Router()

const createJwtToken = userId => {
   const jwtSecret = process.env.JWT_SECRET

   return jwt.sign({
      userId
   },
      jwtSecret,
   {expiresIn: '10d'}
   )
}

router.post('/signup', catchAsync(async (req, res, next) => {
   console.log(req.body)

   if (Object.keys(req.body).length === 0) next(new AppError('No body', 400))

   const { email, password } = req.body

   const user = await User.create({ email, password })

   res.status(201).json({
      status: 'success',
      message: 'User created',
      user
   })
}))

router.post('/login', catchAsync(async (req, res, next) => {
   const {email, password} = req.body

   const user = await User.findOne({email})

   if (!user || Object.keys(user).length === 0) {
      return next(new AppError('This user doesn\'t exist', 404))
   }

   const correct = await bcrypt.compare(password, user.password)
   if (!correct) return next(new AppError('Invalid data', 400))

   const jwtToken = await createJwtToken(user._id)

   res.cookie('token', jwtToken)
   res.status(200).json({
      status: 'success',
      userId: user._id,
      token: jwtToken
   })
}))

module.exports = router