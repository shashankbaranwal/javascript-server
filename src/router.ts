import { Router } from 'express';
import { UserRouter } from './controllers';
import { traineeRouter } from './controllers/trainee';
const mainRouter = Router();
mainRouter.use('/trainee', traineeRouter);
mainRouter.use('/user', UserRouter);
export default mainRouter;