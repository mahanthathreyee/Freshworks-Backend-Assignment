const routes = require('express').Router()
var fs = require('fs')

routes.post('/create', (req, res) => {
    var key = req.body["key"]
    var value = req.body["value"]
    if(key === undefined || value === undefined){
        res.send("Error: Could not parse POST data")
        return
    }
    fs.readFile('data.json', 'utf8', (err, data) => {
        if(err){
            obj = {[key]: value}
            json = JSON.stringify(obj)
            fs.writeFile('data.json', json, 'utf8', (err) => {
                if(err)
                    res.send("Error: Could not write into file")
                else   
                    res.send("Successfully added data")
            })
        }
        else{
            obj = JSON.parse(data)
            if(!(key in obj)){
                obj[key] = value
                console.log(key)
                json = JSON.stringify(obj)
                console.log(json)
                fs.writeFile('data.json', json, 'utf8', (err) => {
                    if(err)
                        res.send("Error: Could not write into file")
                    else
                        res.send("Successfully added data")
                })
            }
            else
                res.send("Error: Key already exists")
        }
    })
})

module.exports = routes