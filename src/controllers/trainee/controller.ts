import { Request, Response, NextFunction } from 'express';
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
    public get = async (req: Request, res: Response, next: NextFunction ) => {
        try {
            const extractedData = await this.userRepository.findAll(req.body, {}, {});
            res.status(200).send({
                message: 'trainee fetched successfully',
                data: [extractedData],
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    public create = async (req: Request, res: Response, next: NextFunction ) => {
        try {
            this.userRepository.userCreate(req.body);
            res.status(200).send({
                message: 'trainee created successfully',
                data: [req.body],
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    public update = async (req: Request, res: Response, next: NextFunction ) => {
        try {
            this.userRepository.userUpdate(req.body);
            res.status(200).send({
                message: 'trainee updated successfully',
                data: [req.body]
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    public delete = async (req: Request, res: Response, next: NextFunction ) => {
        try {
            const id = req.params.id;
            this.userRepository.delete(id);
            res.status(200).send({
                message: 'trainee deleted successfully',
                data: [
                    {
                        Id: req.params.id
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