import { Request, Response, NextFunction } from 'express';
import UserRepository from '../../repositories/user/UserRepository';

class TraineeController {
    static instance: TraineeController;

    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }
    get(_req: Request, res: Response, _next: NextFunction) {
        try {
            console.log('Inside get method of Trainee Controller');
            res.send({
                message: 'Trainees fetched successfully',
                data: [
                    {
                        name: 'Trainee',
                        address: 'Noida'
                    }
                ]

            });
        }
        catch (err) {
            console.log('inside err', err);
        }
    }

    create(_req: Request, res: Response, _next: NextFunction) {
        try {
            console.log('Inside post method of Trainee Controller');
            res.send({
                message: 'Trainees created successfully',
                data: {
                    name: 'Trainee',
                    address: 'Noida'
                }
            });
        }
        catch (err) {
            console.log('inside err', err);
        }
    }
    update(_req: Request, res: Response, _next: NextFunction) {
        try {
            console.log('Inside put method of Trainee Controller');
            res.send({
                message: 'Trainees updated successfully',
                data: {
                    name: 'Trainee',
                    address: 'Noida'
                }
            });

        } catch (err) {
            console.log('inside err', err);
        }
    }
    delete(_req: Request, res: Response, _next: NextFunction) {
        try {
            console.log('Inside delete method of Trainee Controller');
            res.send({
                message: 'Trainees Deleted successfully',
                data: {
                    name: 'Trainee',
                    address: 'Noida'
                }
            });

        } catch (err) {
            console.log('inside err', err);
        }
    }
}

export default TraineeController.getInstance();