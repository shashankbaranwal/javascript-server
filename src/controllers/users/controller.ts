import { Response, Request, NextFunction } from 'express';
import { userModel } from '../../repositories/user/UserModel';
import * as jwt from 'jsonwebtoken';
import IRequest from '../../IRequest';
import { config } from '../../config';
import UserRepository from '../../repositories/user/UserRepository';
class UserController {
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }

    get(req, res, next) {
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
    me( req: IRequest, res: Response, next: NextFunction ) {
        const data = req.userData;
        res.json(200)( {
            message: 'Me',
            status: 'Ok',
            data
       } );
    }
    post(req, res, next) {
        try {
            console.log('Inside User post method Trainee Controller');
            const userRepository: UserRepository = new UserRepository();
            console.log('Data sending in progress');
            userRepository.create(req.body);
            res.send({
                message: 'Post message Successful',
                data: [
                    {
                        name: 'Post Route',
                        address: 'Noida',
                    }
                ]
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }

    put(req, res, next) {
        try {
            console.log('Inside put method Trainee Controller');
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

    delete(req, res, next) {
        try {
            console.log('Inside delete method Trainee Controller');
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

export default UserController.getInstance();