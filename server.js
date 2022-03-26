const app = require('./app')
const dotenv = require('dotenv')
const path = require('path')
const mongoose = require('mongoose')
const AppError = require('./utils/appError')


dotenv.config({ path: path.resolve('config.env') })

const dbPwd = process.env.DB_PWD
const DB = process.env.DB_URI.replace('<password>', dbPwd)
const port = process.env.PORT || 3000

mongoose.connect(DB, (e) => {
   console.log(e)
   console.log('Database connection successful')
})

const server = app.listen(port, () => {
   console.log(`App is running on port ${port}...`)
})