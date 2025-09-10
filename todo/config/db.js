const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/todo')
mongoose.connect('mongodb+srv://shubham:shubham123@cluster0.k198kt0.mongodb.net/todo')
const db = mongoose.connection;
db.once('open', (err) => {
    if (err) {
        console.error('Connection error:', err);
    }
    console.log('DB connected successfully');
})
module.exports = db;