const {Router} = require('express')
const User = require('./model/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const taskController = require('./Controller/TodoController')
const authController =  require('./Controller/AuthController')

const router = Router()

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.post('/addItem',taskController.addTask)
router.get('/getItem',taskController.getTasks)
router.get('/getItem/:id',taskController.getTaskById)
router.put('/editItem/:id',taskController.editTask)
router.delete('/deleteItem/:id',taskController.deleteTask)

module.exports=router