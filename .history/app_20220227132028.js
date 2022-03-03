const express = require('express');
const app = express();

const port = 5000;

app.get('/', (req, res) => {
    res.end('Hi')
})

app.get('/about', (req, res) => {
    res.end('This is about page')
})

//  app.get('/api/v1/tasks')            -get all the tasks
//  app.post('/api/v1/tasks')           -create a new task
//  app.get('/api/v1/tasks/:id')        -get single task
//  app.patch('/api/v1/tasks/:id')      -update tasks
//  app.delete('/api/v1/tasks/:id')     -delete tasks

app.listen(port,() => {
    console.log(`server is running on ${port}`)
})