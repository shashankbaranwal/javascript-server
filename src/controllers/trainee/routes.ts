import { Router } from 'express';
import { authMiddleWare } from '../../libs/routes/authMiddleWare';
import TraineeController from './controller';
import { validationHandler } from '../../libs/routes/validationHandler';
import config from './validation';
const traineeRouter = Router();
traineeRouter.route('/')
    .get(authMiddleWare('getUsers', 'read'), validationHandler(config.get), TraineeController.get)
    .post(authMiddleWare('getUsers', 'write'), validationHandler(config.create), TraineeController.create)
    .put(authMiddleWare('getUsers', 'write'), validationHandler(config.update), TraineeController.update);

traineeRouter.route('/:id')
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(config.delete), TraineeController.delete);

export default traineeRouter;
