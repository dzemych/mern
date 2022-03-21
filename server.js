const app = require('./app')
const dotenv = require('dotenv')
const path = require('path')
const mongoose = require('mongoose')
const AppError = require('./utils/appError')


dotenv.config({ path: path.resolve('config.env') })

const DB = process.env.LOCAL_DB.replace('<password>', 'test1234')
const port = process.env.PORT || 3000
console.log(DB)

mongoose.connect('mongodb://vanya:Cyperboola@localhost:27017/mern?retryWrites=true', (e) => {
   console.log(e)
   console.log('Database connection successful')
})

const server = app.listen(port, () => {
   console.log(`App is running on port ${port}...`)
})

// db.createUser({
//    user: "vanya",
//    pwd: "Cyperboola",
//    roles: ['dbOwner']
// })