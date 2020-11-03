import { router } from 'express';
import traineeController from './Controller';
import validationhandler from '../../libs/routes/validationhandler';
import validation from './validation';

const traineeRouter = router();

traineeRouter.route('/')
    .get(validationhandler(validation.get),traineeController.get)
    .post(validationhandler(validation.create),traineeController.create)
    .put(validationhandler(validation.update),traineeController.update)
    .delete(validationhandler(validation.Delete),traineeController.delete)
export default traineeRouter;




