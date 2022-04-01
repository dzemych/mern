const express = require('express')
const AppError = require('./utils/appError')
const authRouter = require('./routes/auth.routes')
const linkRouter = require('./routes/link.routes')
const redirectRouter = require('./routes/redirect.routes')
const cookieParser = require('cookie-parser')
const cors = require('cors')


const app = express()

/// Using parsers
app.use(cookieParser())
app.use(express.json())

/// Setting up cors
app.use(cors({
   origin: 'http://localhost:3000',
}))
app.use((req, res, next) => {
   res.set('Access-Control-Allow-Methods', '*')
   next()
})

//// Routes
app.use('/api/auth', authRouter)
app.use('/api/link', linkRouter)
app.use('/t', redirectRouter)

//// Errors handler
app.use('*', (req, res, next) => {
   next(new AppError('This route is not yet defined', 404))
})

app.use((err, req, res ,next) => {
   const statusCode = err.statusCode ? err.statusCode : 500
   const message = err.message ? err.message : 'Something went wrong'
   const status = err.status ? err.status : 'fail'

   console.log(err)
   res.status(statusCode).json({
      status, message, stack: err.stack
   })
})

module.exports = app