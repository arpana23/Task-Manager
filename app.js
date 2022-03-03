const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./DB/connect');
require('dotenv').config();

const port = process.env.PORT || 3000;

//middleware
// app.use(express.static())
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.end('TASK MANAGER APP')
})

app.use('/api/v1/tasks', tasks)




const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is running on ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()
