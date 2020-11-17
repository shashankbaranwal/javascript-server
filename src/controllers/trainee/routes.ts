import { Router } from 'express';
import { authMiddleWare } from '../../libs/routes/authMiddleWare';
import TraineeController from './controller';
import { validationHandler } from '../../libs/routes/validationHandler';
import config from './validation';
const traineeRouter = Router();
traineeRouter.route('/')
    .get(TraineeController.get)
    .post(TraineeController.create)
    .put(TraineeController.update);

traineeRouter.route('/:id')
    .delete(validationHandler(config.delete), TraineeController.delete);

export default traineeRouter;
