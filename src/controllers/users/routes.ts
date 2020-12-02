import * as express from 'express';
import UserController from './controller';
import { authMiddleWare } from '../../libs/routes/authMiddleWare';
import { validationHandler } from '../../libs/routes/validationHandler';
import config from './validation';
const userRouter = express.Router();

userRouter.route('/login')
    .post(UserController.login);
userRouter.route('/me')
    .get(authMiddleWare('getUsers', 'read'), UserController.me);
UserRouter.route('/')
    .get(authMiddleWare('getUsers', 'read'), validationHandler(config.get), UserController.get)
    .post(authMiddleWare('getUsers', 'write'), validationHandler(config.create), UserController.create)
    .put(authMiddleWare('getUsers', 'all'), validationHandler(config.update), UserController.update)
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(config.delete), UserController.delete);

UserRouter.route('/:id')
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(config.delete), UserController.delete);


export default userRouter;