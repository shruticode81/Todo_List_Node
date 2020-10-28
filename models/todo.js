//creating schema in this file
const mongoose = require('mongoose'); // schema requires mongoose
const todoSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    due_date:{
        type: String,
        required: true
    }
});
const Todo = mongoose.model('Todo',todoSchema);
module.exports=Todo;
