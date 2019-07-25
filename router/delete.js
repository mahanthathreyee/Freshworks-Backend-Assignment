const routes = require('express').Router()
var fs = require('fs')

routes.post('/delete', (req, res) => {
    var key = req.body["key"]
    if(key === undefined){
        res.send("Error: Could not parse GET data")
        return
    }
    fs.readFile('data.json', 'utf8', (err, data) => {
        if(err)
            res.send("Error: Could not read data")
        else{
            obj = JSON.parse(data)
            if(key in obj){
                delete obj[key]
                json = JSON.stringify(obj)
                fs.writeFile('data.json', json, 'utf8', (err) => {
                    if(err)
                        res.send("Error: Could not delete from file")
                    else
                        res.send("Successfully deleted data")
                })
            }
            else
                res.send("Error: No such key found")
        }
    })
})

module.exports = routes