const express = require('express');
const app = express();

port = 5000;

app.get('/', (req, res) => {
    res.json('Hi')
})

app.listen((port) => {
    console.log(`server is running on ${port}`)
})