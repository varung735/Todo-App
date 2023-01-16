require('dotenv').config();
const express = require('express');
const userRouter = require('./routes/user.routes');
const todoRouter = require('./routes/todo.routes');
const { connectToDB } = require('./config/database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();

app.use('/users', userRouter);
app.use('/todos', todoRouter);

module.exports = app;