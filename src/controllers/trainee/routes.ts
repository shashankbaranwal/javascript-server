import { Router } from 'express';
import { authMiddleWare } from '../../libs/routes/authMiddleWare';
import TraineeController from './controller';
import { validationHandler } from '../../libs/routes/validationHandler';
import config from './validation';
const traineeRouter = Router();
traineeRouter.route('/')
    .get(validationHandler(config.get))
    .post(validationHandler(config.create))
    .put(validationHandler(config.update), TraineeController.put)
    .delete(validationHandler(config.delete), TraineeController.delete);

export default traineeRouter;
