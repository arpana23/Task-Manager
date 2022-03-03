const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

const createTask = (req, res) => {
    res.send('create new task')
}

const getSingleTask = (req, res) => {
    res.send('get single task')
}

const updateTask = (req, res) => {
    res.send('update task')
}

const deleteTask = (req, res) => {
    res.send('delete task')
}

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
};