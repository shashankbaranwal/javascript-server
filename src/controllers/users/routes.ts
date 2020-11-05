import { Router } from 'express';
import userController from './controllers';
import validationHandler from '../../libs/routes/validationHandler';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import validation from './validation';
const userRouter = Router();
userRouter.route('/')
    .post(authMiddleWare('getUsers', 'write'), validationHandler(validation.create), userController.create);

export default userRouter;