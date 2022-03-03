const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./DB/connect')

const port = 5000;

//middleware
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.end('Hi')
})

app.use('/api/v1/tasks', tasks)



//  app.get('/api/v1/tasks')            -get all the tasks
//  app.post('/api/v1/tasks')           -create a new task
//  app.get('/api/v1/tasks/:id')        -get single task
//  app.patch('/api/v1/tasks/:id')      -update tasks
//  app.delete('/api/v1/tasks/:id')     -delete tasks

const start = async () => {
    try {
        await connectDB()
        app.listen(port,console.log(`server is running on ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()
