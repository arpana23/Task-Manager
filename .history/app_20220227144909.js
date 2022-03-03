const express = require('express');
const app = express();
const tasks = require('./routes.tasks')

const port = 5000;

app.get('/', (req, res) => {
    res.end('Hi')
})



//  app.get('/api/v1/tasks')            -get all the tasks
//  app.post('/api/v1/tasks')           -create a new task
//  app.get('/api/v1/tasks/:id')        -get single task
//  app.patch('/api/v1/tasks/:id')      -update tasks
//  app.delete('/api/v1/tasks/:id')     -delete tasks

app.listen(port,() => {
    console.log(`server is running on ${port}`)
})