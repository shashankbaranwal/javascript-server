import { Router } from 'express';
import traineeController from './controller';
import validationHandler from '../../libs/routes/validationHandler';
import authMiddleWare  from '../../libs/routes/authMiddleWare';
import validation from './validation';
const traineeRouter = Router();

traineeRouter.route('/')
    .get( authMiddleWare('getUsers','read'),validationHandler( validation.get ) , traineeController.get )
    .post( authMiddleWare('getUsers','write'),validationHandler( validation.create ) , traineeController.create )
    .put( authMiddleWare('getUsers','all'),validationHandler( validation.update ) , traineeController.update )
    .delete( authMiddleWare('getUsers','delete'),validationHandler( validation.Delete ) , traineeController.delete );
export default traineeRouter;
