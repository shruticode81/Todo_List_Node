const mongoose = require('mongoose');//require the libary like anyother
// connect mongoose to te db with name todo_list_db
mongoose.connect('mongodb://localhost/todo_list_db');
//acquire connection (to check if it is successfully connected)
const db = mongoose.connection;
//runs if error occur in the connection
db.on('error',console.error.bind(console,'error connecting to db'));
// print when db is up & running
db.once('open',function(){
    console.log('Successfully connected to db');
});
