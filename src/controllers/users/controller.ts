import { Response, Request, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { config } from '../../config';
import UserRepository from '../../repositories/user/UserRepository';
import { payLoad } from '../../libs/routes/constant';
import * as bcrypt from 'bcrypt';
import { userModel } from '../../repositories/user/UserModel';

class UserController {
    public userRepository: UserRepository; // = new UserRepository();
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }

    async get(req, res, next) {
        try {
            const userRepository = new UserRepository();
            const extractedData = await userRepository.getAll(req.body, {}, {});
            res.status(200).send({
                message: 'trainee fetched successfully',
                data: [extractedData],
                status: 'success',
            });
        } catch (err) {
            console.log('error: ', err);
        }
    }


    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const userRepository = new UserRepository();
            userRepository.userCreate(req.body);
            res.status(200).send({
                message: 'Data created successfully',
                data: [req.body],
                status: 'success',
            });
        } catch (err) {
            console.log('error: ', err);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const userRepository = new UserRepository();
            userRepository.userUpdate(req.body);
            res.status(200).send({
                message: 'trainee updated successfully',
                data: [req.body]
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
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

    async login(req, res) {
        try {
            console.log('I am in login route');
            const { email , password } = req.body;
            userModel.findOne({ email: (email) }, (err, docs) => {
                    if (bcrypt.compareSync(password, docs.password)) {
                        console.log('Existing user is:', docs);
                        const token = jwt.sign({docs}, config.secret_key, { expiresIn: '15m' });
                        const decorderUser = jwt.verify(token, config.secret_key);
                        console.log(decorderUser);
                        res.send({
                            Data: token,
                            Message: 'User Exists',
                            status: 200
                        });
                    }
                    else {
                        res.send({
                                message: 'Invalid user',
                                data1: {
                                    email: req.body.email,
                                    password: req.body.password
                                }
                            });
                    }
            });
        } catch (err) {
            res.send(err);
        }
    }

    async me(req, res, next) {
        try {
            const token = req.headers.authorization;
            const decorderUser = jwt.verify(token, config.secret_key);
            const email = decorderUser.docs.email;
            console.log(token, email);
            userModel.findOne({ email: (email) }, (err, docs) => {
                    res.send({
                            message: 'User Details',
                            data: {
                                docs,
                            }
                        });
        });
    }
        catch (err) {
            console.log(err);
        }
    }
}
export default UserController.getInstance();