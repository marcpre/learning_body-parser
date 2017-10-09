const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false, }))

//Routes
app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('POST request to the homepage')
    const incoming = req.body
    console.log(incoming)
})

//Server
const port = process.env.APP_PORT || 8080
const host = process.env.APP_HOST || "localhost"

app.listen(port, function() {
    console.log("Listening on " + host + ":" + port)
})

module.exports = app
