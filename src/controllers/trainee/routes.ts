import { Router } from 'express';

import traineeController from './controller';

import validationHandler from '../../libs/routes/validationHandler';
import validation from './validation';
const traineeRouter = Router();

traineeRouter.route('/')
    .get(validationHandler(validation.get),traineeController.get)
    .post(validationHandler(validation.create),traineeController.create)
    .put(validationHandler(validation.update),traineeController.update)
    .delete(validationHandler(validation.Delete),traineeController.delete)
    
export default traineeRouter;
