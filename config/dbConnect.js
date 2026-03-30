// const uri="mongodb+srv://todolist:tasksayan@cluster0.99bnuct.mongodb.net/todoDB"
const uri="mongodb://localhost:27017/todo";

const mongoose = require('mongoose');

function connectDB()
{
    mongoose.connect(process.env.DB_URI)
    .then(() => console.log("Connected to DB"))
    .catch(err => console.log(err));
}

module.exports = connectDB;
