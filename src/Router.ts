import { router } from 'express';

import { traineeRouter } from './controllers/trainee';


const mainRouter = router();

mainRouter.use('/trainee', traineeRouter);

export default mainRouter;
