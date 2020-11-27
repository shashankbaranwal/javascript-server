import { Response, Request, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { config } from '../../config';
import UserRepository from '../../repositories/user/UserRepository';
import { payLoad } from '../../libs/routes/constant';
import { userModel } from '../../repositories/user/UserModel';

class UserController {
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }

        UserController.instance = new UserController();
        return UserController.instance;
    }

    me(req: Request, res: Response, next: NextFunction ) {
        try {
            res.status(200).send({
                message: 'Profile fetched successfully',
                data: [res.locals.userData],
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    login(req, res) {
        try {
            console.log('I am in login route');
            console.log(req.body.email);
            const { email, password } = req.body;

            userModel.findOne({ email: (email) }, (err, docs) => {
                if (err) {
                    console.log(err);
                }
                else {
                    if (docs === null) {
                        res.send({
                            message: 'Invalid user',
                            data1: {
                                email: req.body.email,
                                password: req.body.password
                            }
                        });
                    }
                    else {
                        console.log('Existing user is:', docs);

                        // tslint:disable-next-line: no-shadowed-variable
                        const payLoad = {
                            'iss': 'Online JWT Builder',
                            'iat': 1604994214,
                            'exp': 1636530214,
                            'aud': 'www.successive.com',
                            'sub': 'jrocket@example.com',
                            'email': req.body.email,
                            'password': req.body.password
                        };
                        const token = jwt.sign({ payLoad }, config.secret_key);
                        res.send({
                            Data: token,
                            Message: 'User Exists',
                            status: 200
                        });
                    }
                }
            });
        } catch (err) {
            res.send(err);
        }
    }
    get(req, res, next) {
        try {
            const userRepository = new UserRepository();
            const extractedData =  userRepository.getAll(req.body, {}, {});
            res.status(200).send({
                message: 'trainee fetched successfully',
                data: [extractedData],
                status: 'success',
            });
        } catch (err) {
            console.log('error: ', err);
        }
    }

    create(req: Request, res: Response, next: NextFunction) {
        try {
            const userRepository = new UserRepository();
            userRepository.create(req.body);
            res.status(200).send({
                message: 'Data created successfully',
                data: [req.body],
                status: 'success',
            });
        } catch (err) {
            console.log('error: ', err);
        }
    }
    update(req: Request, res: Response, next: NextFunction) {
        try {
            const userRepository = new UserRepository();
            userRepository.update(req.body);
            res.status(200).send({
                message: 'trainee updated successfully',
                data: [req.body]
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }

    delete(req: Request, res: Response, next: NextFunction) {
        try {
            const userRepository = new UserRepository();
            userRepository.delete(req.body);
            res.status(200).send({
                message: 'trainee deleted successfully',
                data: [
                    {
                        'action': `data has deleted with id -> ${req.body.originalId}`
                    }
                ],
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
}

export default UserController.getInstance();