const port = 3000;

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function(){
    console.log(`Server is alive and kicking on port ${port}`)
})

server.get("/", function(req, resp){
    resp.send("Hello app")
})