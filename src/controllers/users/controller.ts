import { Response, Request, NextFunction } from 'express';
import { userModel } from '../../repositories/user/UserModel';
import * as jwt from 'jsonwebtoken';
import IRequest from '../../IRequest';
import { config } from '../../config';
import UserRepository from '../../repositories/user/UserRepository';
import { payLoad } from '../../libs/routes/constant';

class UserController {
    create(arg0: (req: Request, res: any, next: any) => Promise<void>, arg1: (req: any, res: any, next: any) => any, create: any) {
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
    get(_req: Request, res: Response, _next: NextFunction) {
        try {
            console.log('Inside get method of User');
            res.send({
                message: 'User fetched succefully',
                data: [{
                    name: 'user1',

                }],
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }
    createUser(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('inside createUser method');
            const Userrepository: UserRepository = new UserRepository();
            Userrepository.create(req.body);
            res.send({
                message: 'User created succesfully'
            });
        }
        catch (err) {
            return next({
                error: 'ResponseBadRequest',
                message: err,

            });
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
    getAll(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('inside getall method');
            const Userrepository: UserRepository = new UserRepository();
            Userrepository.getAll({}, (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(data);
                    res.status(200).send({
                        message: 'User fetched successfully',
                        data: [
                            {
                                database: data
                            }
                        ],
                        status: 'Successfully Response'
                    });
                }
            });
        }
        catch (err) {
            return next({
                error: 'ResponseBadRequest',
                message: err,

            });
        }
    }
    me(req: IRequest, res: Response, next: NextFunction) {
        const data = req.userData;
        res.json({
            data
        });
    }
}

export default UserController.getInstance();