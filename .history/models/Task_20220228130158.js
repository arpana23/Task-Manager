const mongoose = require('mongoose')
const Schema = mongoose.Schema


const TaskSchema = new Schema({
    name : {
        type: String,
        require: [true, 'please provide name']
    },
    completed: Boolean
})

module.exports = mongoose.model('Task',TaskSchema)