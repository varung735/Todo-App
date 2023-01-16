const todoModel = require('../models/todo.model');

// for creating a todo. 
// also check the email if it is existing or not.
// if email doesn't exists then don't create the todo (in future.)
exports.createTodo = async (req, res) => {
    try {
        let {userEmail, title, tasks} = req.body;
        
        //To check for the missing fields
        if(!userEmail || !title){
            res.status(400).send("Fill in the complete details.");
        }

        const todo = await todoModel.create({
            userEmail,
            title,
            tasks
        })

        res.status(200).json({
            "success": true,
            "message": "todo created successfully.",
            todo
        });

    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "todo creation unsuccessful."
        });
        console.log(error.message);
    }
}

//for getting all the todos by the email.
exports.getTodos = async (req, res) => {
    try {
        let { userEmail } = req.params;
        
        //if email is not present in req
        if(!userEmail){
            res.status(401).send("Please enter the email to get todos");
        }

        let todos = await todoModel.find({ userEmail });

        res.status(200).json({
            "success": true,
            "message": "got all todos successfully.",
            todos
        });

    } catch (error) {

        res.status(400).json({
            "success": false,
            "message": error.message
        })
        console.log(error.message)
    }
}

//to get a particular todo through userEmail and title (search feature)
//using regex to enable partial search.
exports.getTodo = async (req, res) => {
    try {
        let { userEmail, title } = req.body;

        // to check if any field is empty
        if(!userEmail || !title){
            res.status(400).send("userEmail or title is missing.");
        }

        // using regular expressions for partial searches (will learn more about it later)
        let reqTodos = await todoModel.find({ userEmail, title: { $regex: new RegExp(title, "i") } });

        res.status(200).json({
            "success": true,
            "message": "got todo successfully",
            reqTodos
        });

    } catch (error) {
        res.status(400).json({
            "Success": false,
            "message": "cannot get todos",
            "error": error.message
        });
        console.log(error);
    }
}

//for editing the todo
exports.editTodo = async (req, res) => {
    try {
        let id = req.params.id;
        let { userEmail, title, tasks } = req.body;

        let editedTodo = await todoModel.updateOne({_id: id}, {
            userEmail,
            title,
            tasks
        }, {multi: true});

        res.status(200).json({
            "success": true,
            "message": "edited todo successfully.",
            editedTodo
        });

    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "cannot edit todo",
            "error": error.message
        });
        console.log(error);
    }
}

//for deleting the the todo
exports.deleteTodo =  async (req, res) => {
    try {
        let deletedTodo = await todoModel.findByIdAndDelete(req.params.id);

        res.status(200).json({
            "success": true,
            "message": "deleted todo successfully.",
            deletedTodo
        });

    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "cannot delete todo",
            "error": error.message
        });
        console.log(error);
    }
}