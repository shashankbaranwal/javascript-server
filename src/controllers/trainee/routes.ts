import { Router } from 'express';
// import { authMiddleWare } from '../../libs/routes/authMiddleWare';
import TraineeController from './controller';
import { validationHandler } from '../../libs/routes/validationHandler';
import config from './validation';
const traineeRouter = Router();
traineeRouter.route('/')
    .get(authMiddleWare('getUsers', 'read'), validationHandler(config.get), TraineeController.get)
    .post(authMiddleWare('getUsers', 'write'), validationHandler(config.create), TraineeController.create)
    .put(authMiddleWare('getUsers', 'all'), validationHandler(config.update), TraineeController.update)
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(config.Delete), TraineeController.delete);
export default traineeRouter;
