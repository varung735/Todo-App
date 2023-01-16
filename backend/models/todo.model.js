const mongoose  = require('mongoose');

const todoSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        require: true,
    },
    Date: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        require: [true, "Cannot create a task without title"],
    },
    tasks: [{
        taskTitle: {
            type: String
        },
        isDone: {
            type: Boolean,
            default: false
        }
    }]
})

todoSchema.index({ title: "text" }); //That's a text index necessary to use search feature.

module.exports = mongoose.model('todos', todoSchema);