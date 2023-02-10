// bring in node modules
require('dotenv').config()
const express = require('express')
const app = express()
let bodyParser = require('body-parser')
const cors = require('cors')

// identify port number
const port = 8080


// express use() function to add third-party middleware
app.use(cors())
app.use(bodyParser.json())

// ENDPOINT WILL GO HERE

// Connect host to port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

})

app.get('/api/', function(req, res) {
    res.send('hello world');
});