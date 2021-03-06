const express = require("express")
const app = express()

app.set('secret', 'dddddadsf')

app.use(require("cors")())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./routes/admin')(app)
require('./plugins/db')(app)

app.listen(3130, () => {
  console.log('http://localhost:3130')
})