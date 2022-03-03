const mongoose = require('mongoose');


const connectionString = 'mongodb+srv://Arpana:arpana23@node-express.wgv8t.mongodb.net/node-express?retryWrites=true&w=majority'

mongoose
    .connect(connectionString)
    .then(()=> console.log('connected to the DB...'))
    .catch((err) => console.log(err))