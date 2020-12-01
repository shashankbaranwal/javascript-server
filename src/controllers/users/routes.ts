import * as express from 'express';
import UserController from './controller';
import { authMiddleWare } from '../../libs/routes/authMiddleWare';
import { validationHandler } from '../../libs/routes/validationHandler';
import config from './validation';
const userRouter = express.Router();


userRouter.route('/')
    .get(authMiddleWare('getUser', 'read'), validationHandler(config.get), UserController.get)
    .post(authMiddleWare('getUser', 'read'), validationHandler(config.create), UserController.create)
    .put(authMiddleWare('getUser', 'read'), validationHandler(config.update), UserController.update)
    .delete(authMiddleWare('getUser', 'read'), validationHandler(config.delete), UserController.delete);
userRouter.route('/login')
    .post(UserController.login);
userRouter.route('/me')
    .get(authMiddleWare('getUsers', 'read'), UserController.me);



export default userRouter;
