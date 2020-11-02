import { Router } from 'express';
import traineeController from './Controller';
import validationhandler from '../../libs/validationhandler';
import validation from './validation';

const traineeRouter = Router();

traineeRouter.route('/')
    .get(validationhandler(validation.get), traineeController.get )
    .post(validationhandler(validation.create), traineeController.create)
    .put(validationhandler(validation.update), traineeController.update)
    .delete(validationhandler(validation.delete), traineeController.delete);

export default traineeRouter;



