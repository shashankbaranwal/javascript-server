import { Router } from 'express';

import traineeController from './controller';

import validationHandler from '../../libs/routes/validationHandler';
import validation from './validation';
const traineeRouter = Router();

traineeRouter.route('/')
<<<<<<< HEAD
    .get(validationHandler(validation.get),traineeController.get)
    .post(validationHandler(validation.create),traineeController.create)
    .put(validationHandler(validation.update),traineeController.update)
    .delete(validationHandler(validation.Delete),traineeController.Delete)
    // traineeRouter.route('/:id')
=======
    .get(traineeController.get)
    .post(traineeController.create)
    .put(traineeController.update)
    .delete(traineeController.Delete)
>>>>>>> 0446b498b8d1136e09ccdaf3d0a8c7e646b884aa

export default traineeRouter;
