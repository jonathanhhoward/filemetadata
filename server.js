const cors = require('cors')
const express = require('express')
const multer = require('multer')

const app = express()
const upload = multer({ dest: 'uploads/' })

app.use(cors())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

const server = app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port:', server.address().port)
})
