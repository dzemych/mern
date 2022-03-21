const app = require('./app')
const dotenv = require('dotenv')
const path = require('path')


dotenv.config({ path: path.resolve('config.env') })

const port = process.env.PORT || 3000

const server = app.listen(port, () => {
   console.log(`App is running on port ${port}...`)
})