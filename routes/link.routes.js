const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')
const express = require('express')
const shortId = require('shortid')
const auth = require('../middlewares/protect')
const Link = require('../modelsDB/linkModel.js')


const router = express.Router()

router.use(auth.protect)

router.post('/generate', catchAsync(async (req, res, next) => {
   const {from} = req.body
   const code = shortId.generate()
   const baseUrl = process.env.BASE_URL


   const existing = await Link.findOne({from: from})
   if (existing) return res.json({link: existing})

   const shortUrl = `${baseUrl}/t/${code}`

   const link = new Link({
      from, code, to: shortUrl, owner: req.userId
   })

   await link.save()

   res.status(200).json({
      status: 'success',
      statusMessage: 'Link created',
      link
   })
}))


router.get('/', catchAsync(async (req, res, next) => {
   const links = await Link.find({owner: req.userId})

   if (!links || links.length === 0) {
      return next(new AppError('You have no created links yet', 404))
   }

   res.status(200).json({
      status: 'success',
      statusMessage: 'Received',
      links
   })
}))

router.get('/:id', catchAsync(async (req, res, next) => {
   const link = await Link.findById(req.params.id)

   if (!link) return next(new AppError('No link found', 404))

   res.status(200).json({
      status: 'success',
      statusMessage: 'Received',
      link
   })
}))

module.exports = router