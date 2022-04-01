const {Router} = require('express')
const Link = require('../modelsDB/linkModel')
const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')


const router = Router()

router.get('/:code', catchAsync(async (req, res, next) => {
   const link = await Link.findOne({code: req.params.code})

   if (!link) return next(new AppError('No link with such id', 404))

   link.clicked++
   await link.save()
   res.redirect(link.from)

}))

module.exports = router