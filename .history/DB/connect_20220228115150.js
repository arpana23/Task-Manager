const mongoose = require('mongoose');


const connectionString = 'mongodb+srv://Arpana:arpana23@node-express.wgv8t.mongodb.net/node-express?retryWrites=true&w=majority'

const connectDB = (url) => {
    return mongoose.connect(connectionString)
}

module.exports = connectDB
    