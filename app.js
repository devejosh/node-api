//imports

//EXPRESS FRAMEWORK
const express = require('express')
const app = express()

//port definition 
const PORT  = process.env.PORT || 3000;

app.get ('/' , (req, resp) => {
    resp.send ("Hello, this is a basic express server")
});

const server = app.listen(PORT , () => {
    console.log (`Express is listening on port : ${PORT}`)
})

server.close(() => {
    console.log ("Server instance has ended")
})