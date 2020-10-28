const express = require('express');
const port = 4000;
const path = require('path');
const db = require('./config/mongoose');
const Todo = require('./models/todo');
const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));


app.get('/',function(req,res){
    //fetch the todo list bfrm the db
    Todo.find({},function(err,todos){
       if(err){
           console.log('Error in fetching todos from the db');
           return;
       }
        return res.render('home',{
            title:"TODO LIST SHRUTI",
           todo_list: todos
        });
    });
    
});

app.post('/create-todo',function(req,res){
    Todo.create({
        description:req.body.description,
        category:req.body.category,
        due_date:req.body.date
        
    },function(err,newTodo){
        if(err){
            console.log('Error in creating a todolist!');
            return;
        }
        console.log('******',newTodo);
        //var str = newTodo.due_date.toString();  
       // console.log('type of ', typeof(newTodo.due_date))
       // var res = str.split(" ");
      //  console.log(res);
        res.redirect('back');
    });
    
});

app.post('/delete-todo',function(req,res){
    let object = req.body;
    console.log(object);
    for(let property in object){  
        let id = object[property];
        Todo.findByIdAndDelete(id,function(err){
            if(err){
                console.log('error',err);
                return;
            }
            //return res.redirect('back');
        });

        // Todo.deleteMany()
    //     let index = todo_list.findIndex(todo => todo.property == id);
    //    if(index!= -1){
    //     todo_list.splice(index,1);
    //    }
    
    }
    return res.redirect('back');


    
    // let arr = [];
    // for(let obj in object){
    //     arr.push(obj);// isse bs key push hoga na , haan
    // }
    // 
    // //https://kb.objectrocket.com/mongo-db/mongoose-delete-many-by-id-932#:~:text=The%20deleteMany()%20method%20is%20very%20useful.,delete%20multiple%20documents%20by%20id.
    // Todo.deleteMany({  
    //     _id: {
    //         $in: arr
    //     }
    // },function(err){
    //     if(err){
    //         console.log('err in deleting : ',err);
    //         return res.status(500).json({
    //             data: {
    //                 message: "error in deleting "
    //             }
    //         });
    //     }
    //     res.redirect('back'); // i have to redirect only once no
    // })
    // return res.redirect('back');
    
});

app.listen(port,function(err){
    if(err){
        console.log(`Error in running server at port:${port}`);
    }
    console.log(`Yup! My Express server is up & running at port:${port}`);
});