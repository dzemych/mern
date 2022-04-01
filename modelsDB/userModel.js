const {Schema, model, Types} = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')


const userSchema = new Schema({
   email: {
      type: String,
      required: true,
      unique: [true, 'This email is already been used'],
      validate: [validator.isEmail, 'Enter valid email address']
   },
   password: {
      type: String,
      required: true,
      minlength: [8, 'Password must be at least 8 characters long']
   }
})

userSchema.pre('save', async function(next) {
   this.password = await bcrypt.hash(this.password, 12)
   next()
})

const User = model('User', userSchema)

module.exports = User