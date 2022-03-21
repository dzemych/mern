const express = require('express')
const catchAsync = require('../utils/catchAsync')


const router = express.Router()

router.post('/login', catchAsync(async (req, res, next) => {
   res.status(200).json({
      status: 'success',
      message: 'Hello'
   })
}))

module.exports = router