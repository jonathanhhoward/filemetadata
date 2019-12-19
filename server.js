const cors = require('cors')
const express = require('express')
const fileMetadata = require('./filemetadata')

const app = express()

app.use(cors())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.use('/api/fileanalyse', fileMetadata())

const server = app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port:', server.address().port)
})
