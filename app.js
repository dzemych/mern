const express = require('express')
const AppError = require('./utils/appError')
const authRouter = require('./routes/authRoutes')
const json = require('jsonwebtoken')


const app = express()

app.use(express.json({ limit: "10kb" }))

app.use('/api/auth', authRouter)

app.use('*', (req, res, next) => {
   next(new AppError('This route is not yet defined', 404))
})

app.use((err, req, res ,next) => {
   const statusCode = err.statusCode ? err.statusCode : 500
   const message = err.message ? err.message : 'Something went wrong'
   const status = err.status ? err.status : 'fail'

   res.status(statusCode).json({
      status, message, stack: err.stack
   })
})

module.exports = app