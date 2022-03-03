const mongoose = require('mongoose');


const connectionString = 'mongodb+srv://Arpana:<password>@node-express.wgv8t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(connectionString)