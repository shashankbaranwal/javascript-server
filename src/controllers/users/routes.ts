import * as express from 'express';
import UserController from './controller';
import { authMiddleWare } from '../../libs/routes/authMiddleWare';
import { validationHandler } from '../../libs/routes/validationHandler';
import config from './validation';
// import { Router } from 'express';
// import { permissions } from '../../libs/routes/constant';
const UserRouter = express.Router();

UserRouter.route('/me')
    .get(authMiddleWare('getUsers', 'read'), UserController.me);

UserRouter.route('/login')
    .post(UserController.login, validationHandler(config.create), UserController.me);

UserRouter.route('/:id')
    .delete(validationHandler(config.delete), UserController.delete);

UserRouter.route('/getall')
    .get(UserController.getAll);

UserRouter.route('/findone')
    .get(UserController.findOne);

UserRouter.route('/create')
    .post(UserController.createUser);

UserRouter.route('/update')
    .put(UserController.update);

export default UserRouter;