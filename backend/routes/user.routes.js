const express = require('express');
const userRouter = express.Router();

const { createUser, loginUser } = require('../controllers/users.controller');

userRouter.post('/signin', createUser);
userRouter.post('/login', loginUser);

module.exports = userRouter;