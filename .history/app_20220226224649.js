const express = require('express');
const app = express();

const port = 5000;

app.get('/', (req, res) => {
    res.json('Hi')
})

app.listen(() => {
    console.log(`server is running on ${port}`)
})