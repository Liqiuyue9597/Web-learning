const express = require("express")

const app = express()

app.use(require("cors")())
app.use(express.json())
app.use('/admin/api/upload', express.static)

require('./routes/admin')(app)
require('./plugins/db')(app)

app.listen(3130, () => {
  console.log('http://localhost:3130')
})