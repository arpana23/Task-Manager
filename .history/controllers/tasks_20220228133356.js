const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try {
        const task = await Task.find({})
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json(error)
    }
}

const createTask = async (req, res) => {

    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json(error)
    }
}

const getSingleTask = (req, res) => {
    res.json({ id: req.params.id})
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