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

const getSingleTask = async (req, res) => {
    try {
        const singleTask = await Task.findOne({id: req.params.id})
        res.status(201).json({ singleTask })
    } catch (error) {
        res.status(500).json(error)
    }
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