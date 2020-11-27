import { Request, Response, NextFunction } from 'express';
import * as bcrypt from 'bcrypt';
import UserRepositories from '../../repositories/user/UserRepository';

class TraineeController {
    private userRepository;
    constructor() {
        this.userRepository = new UserRepositories();
    }
    static instance: TraineeController;
    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }
    public get =  (req: Request, res: Response, next: NextFunction ) => {
        try {
            const extractedData =  this.userRepository.getAll(req.body, {}, {});
            res.status(200).send({
                message: 'trainee fetched successfully',
                data: [extractedData],
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    public create =  (req: Request, res: Response, next: NextFunction ) => {
        try {
            this.userRepository.create(req.body);
            res.status(200).send({
                message: 'trainee created successfully',
                data: [req.body],
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    public update = (req: Request, res: Response, next: NextFunction ) => {
        try {
            const isIdValid =  this.userRepository.update(req.body);
            if (!isIdValid) {
                return next({
                    message: 'Id is invalid',
                    error: 'Id not found',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'trainee updated successfully',
                data: [req.body]
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    public delete = (req: Request, res: Response, next: NextFunction ) => {
        try {
            const id = req.params.id;
            const isIdValid = this.userRepository.delete(id);
            if (!isIdValid) {
                return next({
                    message: 'Id is invalid',
                    error: 'Id not found',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'trainee deleted successfully',
                data: [
                    {
                        Id: id
                    }
                ],
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
}

export default TraineeController.getInstance();