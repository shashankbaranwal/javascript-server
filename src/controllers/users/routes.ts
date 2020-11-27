import * as express from 'express';
import UserController from './controller';
import { authMiddleWare } from '../../libs/routes/authMiddleWare';
import { validationHandler } from '../../libs/routes/validationHandler';
import config from './validation';
const userRouter = express.Router();


userRouter.route('/')
    .get(UserController.get)                                       // authMiddleWare('getUser', 'read'), validationHandler(validation.get),
    .post(UserController.create)                                  // authMiddleWare('getUser', 'read'), validationHandler(validation.create),
    .put( UserController.update)                                 // authMiddleWare('getUser', 'read'), validationHandler(validation.update),
    .delete(UserController.delete);                             // authMiddleWare('getUser', 'read'), validationHandler(validation.delete),
userRouter.route('/login')
    .post(UserController.login);
userRouter.route('/me')
    .get(authMiddleWare('getUsers', 'read'), UserController.me);



export default userRouter;