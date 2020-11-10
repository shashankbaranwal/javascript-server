import * as express from 'express';
import UserController from './controller';
import { authMiddleWare } from '../../libs/routes/authMiddleWare';
import { permissions } from '../../libs/routes/constant';
import { validationHandler } from '../../libs/routes/validationHandler';
import config from './validation';
import { Router } from 'express';

const UserRouter = express.Router();

UserRouter.route('/')
    .get(authMiddleWare('getUsers', 'read'), validationHandler(config.get), UserController.get)
    .post(authMiddleWare('getUsers', 'write'), validationHandler(config.get), UserController.create)
    .put(authMiddleWare('getUsers', 'all'), validationHandler(config.get), UserController.update)
    .delete(authMiddleWare('getUsers', 'read'), validationHandler(config.get), UserController.delete);

UserRouter.route('/me')
    .get(authMiddleWare('getUsers', 'all'), UserController.me);

UserRouter.route('/login')
    .post(validationHandler(config.login), UserController.login);

export default UserRouter;