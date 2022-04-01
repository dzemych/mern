const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')
const jwt = require('jsonwebtoken')


exports.protect = catchAsync(async (req, res, next) => {
   const jwtSecret = process.env.JWT_SECRET

   if (req.method === 'OPTIONS') return next()

   const token = req.headers.authorization.split(' ')[1]

   if (!token) return next(new AppError('Authorization required', 401))

   const decode = jwt.verify(token, jwtSecret)

   req.userId = decode.userId

   next()
})
