import { Router } from 'express';
import { userRouter } from './controllers';
import { traineeRouter } from './controllers/trainee';
const mainRouter = Router();
mainRouter.use('/trainee', traineeRouter);
mainRouter.use('/user', userRouter);
export default mainRouter;