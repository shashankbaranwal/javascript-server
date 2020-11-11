import { Response, Request, NextFunction } from 'express';
import { userModel } from '../../repositories/user/UserModel';
import * as jwt from 'jsonwebtoken';
import IRequest from '../../IRequest';
import { config } from '../../config';
import UserRepository from '../../repositories/user/UserRepository';
import { users } from '../../libs/routes/constant';

class UserController {
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }
    get(_req: Request, res: Response, _next: NextFunction) {
        try {
            console.log('Inside get method of User');
            res.send({
                message: 'User fetched succefully',
                data: [{
                    name: 'user1',

                },
                {
                    name: 'user2',
                }]
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
                message: 'Trainee created succesfully'
            });
        }
        catch (err) {
            return next({
                error: 'ResponseBadRequest',
                message: err,

            });
        }
    }
    findOne(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('inside findOne method');
            const Userrepository: UserRepository = new UserRepository();
            Userrepository.findOne({email: req.body.email}, (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(data);
                    res.status(200).send({
                        message: 'Trainees find successfully',
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
    delete(req: Request, res: Response, next: NextFunction ) {
        try {
            const userRepository = new UserRepository();
            userRepository.delete(req.params.id);
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
    update(req: Request, res: Response, next: NextFunction ) {
        try {
            const userRepository = new UserRepository();
            userRepository.userUpdate(req.body);
            res.status(200).send({
                message: 'User updated successfully',
                data: [req.body]
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
    login(req: IRequest, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;
            userModel.findOne({ email: req.body.email }, (err, result) => {
                if (result) {
                    if (password === result.password) {
                        console.log('result is', result.password);
                        const token = jwt.sign({
                            result
                        }, config.secret_key);
                        console.log(token);
                        res.send({
                            data: token,
                            message: 'Login Permited',
                            status: 200
                        });
                    }
                    else {
                        res.send({
                            message: 'Password Doesnt match',
                            status: 400
                        });
                    }
                }
                else {
                    res.send({
                        message: 'Email is not Registered',
                        status: 404
                    });
                }
            });
        }
        catch (err) {
            res.send(err);
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