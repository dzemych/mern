const express = require('express')
const catchAsync = require('../utils/catchAsync')
const User = require("../modelsDB/userModel")


const router = express.Router()

router.post('/signup', catchAsync(async (req, res, next) => {
   const { email, password } = req.body

   const user = await User.create({ email, password })

   res.status(200).json({
      status: 'success',
      message: 'Hello',
      user
   })
}))

router.post('/login', catchAsync(async (req, res, next) => {
   const { email, password } = req.body

   const user = await User.create({ email, password })

   res.status(200).json({
      status: 'success',
      message: 'Hello',
      user
   })
}))

module.exports = router