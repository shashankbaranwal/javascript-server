import { Router } from 'express';

import TraineeController from './controller';

import { validationHandler } from '../../libs/routes/validationHandler';
import validation from './validation';
const traineeRouter = Router();

traineeRouter.route('/')
    .get(validationHandler(validation.get), TraineeController.get)
    .post(validationHandler(validation.create), TraineeController.create)
    .put(validationHandler(validation.update), TraineeController.update)
    .delete(validationHandler(validation.Delete), TraineeController.delete);
// traineeRouter.route('/:id')

export default traineeRouter;
