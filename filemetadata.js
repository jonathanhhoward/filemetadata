const multer = require('multer')
const router = require('express').Router()

const upload = multer({ dest: 'uploads/' })

module.exports = () => {
  router.post('/', upload.single('upfile'), (req, res) => {
    res.json({
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size
    })
  })

  return router
}
