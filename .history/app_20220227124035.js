const express = require('express');
const app = express();

const port = 5000;

app.get('/', (req, res) => {
    res.end('Hi')
})

app.get('/about', (req, res) => {
    res.end('This is about page')
})

app.listen(port,() => {
    console.log(`server is running on ${port}`)
})