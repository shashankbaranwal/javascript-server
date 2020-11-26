import * as express from 'express';
import UserController from './controller';
import { authMiddleWare } from '../../libs/routes/authMiddleWare';
import { permissions } from '../../libs/routes/constant';
import { validationHandler } from '../../libs/routes/validationHandler';
import config from './validation';
import { Router } from 'express';

const UserRouter = express.Router();

UserRouter.route('/')
    .get(UserController.get)                                       // validationHandler(config.get),
    .post(UserController.post)                                    // validationHandler(config.create),
    .put(UserController.put)                                     // validationHandler(config.update),
    .delete(UserController.delete);                             // validationHandler(config.delete),
UserRouter.route('/login')
    .post(UserController.login, validationHandler(config.create));
UserRouter.route('/me')
    .get( authMiddleWare('getUsers', 'read'), UserController.me);

export default UserRouter;