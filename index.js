const express = require('express')
const router = require('./router/router')

const app = express()
app.use(express.json())
app.use(router)

app.use(function (error, req, res, next) {
    if(error instanceof SyntaxError){
        res.send("Error: Bad JSON format")
    } else {
      next();
    }
});

app.listen(3000)