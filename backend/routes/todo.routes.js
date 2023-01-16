const express = require('express');
const todoRouter = express.Router();

const { createTodo, getTodos, getTodo, editTodo, deleteTodo } = require('../controllers/todos.controller');

todoRouter.post('/createTodo', createTodo);
todoRouter.get('/getTodos/:userEmail', getTodos);
todoRouter.post('/getTodo', getTodo); //search feature.
todoRouter.put('/editTodo/:id', editTodo);
todoRouter.delete('/deleteTodo/:id', deleteTodo)

module.exports = todoRouter;