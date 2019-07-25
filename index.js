var express = require('express')
var router = require('./router/router')

var app = express()
app.use(express.json())
app.use(router)

app.listen(3000)