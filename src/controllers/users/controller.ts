import { Response, Request, NextFunction } from 'express';
import { userModel } from '../../repositories/user/UserModel';
import * as jwt from 'jsonwebtoken';
import IRequest from '../../IRequest';
import { config } from '../../config';
import UserRepository from '../../repositories/user/UserRepository';
import { payLoad } from '../../libs/routes/constant';

class UserController {
    me(arg0: (req: Request, res: any, next: any) => Promise<any>, me: any) {
        throw new Error('Method not implemented.');
    }
    remove(arg0: (req: Request, res: any, next: any) => Promise<any>, remove: any) {
        throw new Error('Method not implemented.');
    }
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }

        UserController.instance = new UserController();
        return UserController.instance;
    }

    profile(req: Request, res: Response, next: NextFunction ) {
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
    login(req: Request, res: Response, next: NextFunction ) {
        try {
            const userRepositories = new UserRepository();
            const { email, password } = req.body;
            Object.assign(payLoad , {email, password});
            userRepositories.findOne({email, password})
                .then((data) => {
                    if (data) {
                        const secret = config.secret_key;
                        const tokenGenerated = jwt.sign(payLoad, secret);
                        res.status(200).send({
                            message: 'Logged in successfully',
                            data: [
                                {
                                    token: tokenGenerated
                                }
                            ],
                            status: 'success',
                        });
                    }
                })
                .catch((err) => {
                    next ({
                        message: 'invalid email or password',
                        error: 'Authentication Failed',
                        status: 403
                    });
                });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    get(req: Request, res: Response, next: NextFunction ) {
        try {
            res.status(200).send({
                message: 'User fetched successfully',
                data: [
                    {
                        name: 'User1',
                        address: 'Noida',
                    }
                ]
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    create(req: Request, res: Response, next: NextFunction ) {
        try {
            res.status(200).send({
                message: 'User created successfully',
                data: [
                    {
                        name: 'User2',
                        address: 'Delhi',
                    }
                ]
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    update(req: Request, res: Response, next: NextFunction ) {
        try {
            res.status(200).send({
                message: 'User updated successfully',
                data: [
                    {
                        name: 'User3',
                        address: 'Noida',
                    }
                ]
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    delete(req: Request, res: Response, next: NextFunction ) {
        try {
            res.status(200).send({
                message: 'User deleted successfully',
                data: [
                    {
                        name: 'User4',
                        address: 'Faridabad',
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