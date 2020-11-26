import * as express from 'express';
import UserController from './controller';
import { authMiddleWare } from '../../libs/routes/authMiddleWare';
import { validationHandler } from '../../libs/routes/validationHandler';
import config from './validation';
const UserRouter = express.Router();

UserRouter.route('/me')
    .get(authMiddleWare('getUsers', 'read'), validationHandler(config.get), UserController.me);
UserRouter.route('/login')
    .post(validationHandler(config.create), UserController.login);
UserRouter.route('/')
    .get(authMiddleWare('getUsers', 'read'), validationHandler(config.get), UserController.get)
    .post(authMiddleWare('getUsers', 'write'), validationHandler(config.create), UserController.create)
    .put(authMiddleWare('getUsers', 'all'), validationHandler(config.update), UserController.update)
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(config.delete), UserController.delete);

UserRouter.route('/:id')
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(config.delete), UserController.delete);

export default UserRouter;