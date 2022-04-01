const mongoose = require('mongoose')

const linkSchema = new mongoose.Schema({
   to: {
      type: String,
      required: true
   },
   from: {
      type: String,
      required: true,
   },
   owner: {
      type: mongoose.ObjectId,
      required: true
   },
   code: {
      type: String,
      required: true,
      unique: true
   },
   createdAt: {
      type: Date,
      default: Date.now
   },
   clicked: {
      type: Number,
      default: 0
   }
})

const Link = mongoose.model('Link', linkSchema)

module.exports = Link