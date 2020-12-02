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

    async get(req, res, next) {
        try {
            console.log('Inside get method Trainee Controller');
            res.send({
                message: 'Get message Successful',
                data: [
                    {
                        name: 'Get Trainee ',
                        address: 'Noida',
                    }
                ]
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }

    async post(req, res, next) {
        try {
            console.log('Inside get method Trainee Controller');
            res.send({
                message: 'Post message Successful',
                data: [
                    {
                        name: 'Post Trainee123',
                        address: 'Noida',
                    }
                ]
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }

    async put(req, res, next) {
        try {
            console.log('Inside get method Trainee Controller');
            res.send({
                message: 'Put message Successful',
                data: [
                    {
                        name: 'Trainee123',
                        address: 'Noida',
                    }
                ]
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }

    async delete(req, res, next) {
        try {
            console.log('Inside get method Trainee Controller');
            res.send({
                message: 'delete message Successful',
                data: [
                    {
                        name: 'Trainee123',
                        address: 'Noida',
                    }
                ]
            });
        } catch (err) {
            console.log('Inside err', err);

        }
    }
}

export default TraineeController.getInstance();