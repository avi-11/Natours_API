const express=require('express');
const userController=require('../controllers/usersController');

const userRouter=express.Router();

userRouter.route('/').get(userController.getAllUsers).post(userController.addUser);
userRouter.route('/:id').get(userController.getSingleUser).patch(userController.updateUser).delete(userController.deleteUser);

module.exports=userRouter;