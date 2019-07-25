const routes = require('express').Router()
const fs = require('fs')

routes.post('/create', (req, res) => {
    const key = req.body["key"]
    const value = req.body["value"]
    const ttl = parseInt(req.body["ttl"])
    if(key === undefined || value === undefined){
        res.send("Error: Could not parse POST data")
        return
    }
    if(ttl === undefined)
        ttl = -1
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
            const currentTime = Date.now();
            if(!(key in obj) || (currentTime - obj[key]["createdTime"] > obj[key]["ttl"])){
                obj[key] = {"value": value, "createdTime": currentTime, "ttl": ttl}
                json = JSON.stringify(obj)
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