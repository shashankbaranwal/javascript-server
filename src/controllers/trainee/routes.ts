import { Router } from 'express';
import { validationHandler } from '../../libs/routes/validationHandler';
import { authMiddleWare } from '../../libs/routes/authMiddleWare';
import TraineeController from './controller';
import validation from './validation';
const traineeRouter = Router();
traineeRouter.route('/')
    .get(authMiddleWare('getUsers', 'read'), validationHandler(validation.get), TraineeController.get)
    .post(authMiddleWare('getUsers', 'write'), validationHandler(validation.create), TraineeController.create)
    .put(authMiddleWare('getUsers', 'all'), validationHandler(validation.update), TraineeController.update)
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(validation.Delete), TraineeController.delete);
export default traineeRouter;
