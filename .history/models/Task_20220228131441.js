const mongoose = require('mongoose')
const Schema = mongoose.Schema


const TaskSchema = new Schema({
    name : {
        type: String,
        required: [true, 'please provide name'],
        trim: true,
        maxlength: [20, 'name can cot be more than 20 character'],
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Task',TaskSchema)