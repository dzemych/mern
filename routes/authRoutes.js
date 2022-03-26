const express = require('express')
const catchAsync = require('../utils/catchAsync')
const User = require("../modelsDB/userModel")
const bcrypt = require('bcrypt')
const AppError = require('../utils/appError')


const router = express.Router()

router.post('/signup', catchAsync(async (req, res, next) => {
   console.log('/////////////////')
   console.log(req.body)
   if (Object.keys(req.body).length === 0) next(new AppError('No body', 400))

   const { email, password } = req.body
   const hashedPwd = await bcrypt.hash(password, 12)

   const user = await User.create({ email, password: hashedPwd })

   res.status(200).json({
      status: 'success',
      message: 'Hello',
      user
   })
}))

router.post('/login', catchAsync(async (req, res, next) => {
   next(new AppError('This route is not yet defined', 404))
}))

module.exports = router