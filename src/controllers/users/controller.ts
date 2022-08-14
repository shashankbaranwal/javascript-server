import { Response, Request, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { config } from '../../config';
import UserRepository from '../../repositories/user/UserRepository';
import { payLoad } from '../../libs/routes/constant';
import * as bcrypt from 'bcrypt';
import { userModel } from '../../repositories/user/UserModel';
import IRequest from '../../IRequest';
import { Query } from 'mongoose';

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

    get = async(req, res, next) => {
        try {
            const userRepository = new UserRepository();
            let searchString = req.query.search as string || '';
            console.log(searchString);
            let column = '';
            const regexName = /^[a-z]+$/i;
            const regexEmail = /\b[a-zA-Z0-9+_.-]+@[a-z]+\.[a-z]{2,}\b/;
            if (searchString) {
                if (regexName.test(searchString)) {
                    column = 'name';
                }
                if (regexEmail.test(searchString)) {
                    column = 'email';
                }
            }
            else {
                searchString = undefined;
                column = undefined;
            }
            const { sortedBy , sortedOrder} = req.query;
            const { skip , limit} = req.query ;
            const sort = {};
            sort[`${sortedBy}`] = sortedOrder;
            console.log(sort);
            const userList = await userRepository.getList(req.body, {}, { skip, limit}, sort);
            const totalCount = await userRepository.count(req.body);
            const count = userList.length;
            res.status(200).send({
                message: 'trainee fetched successfully',
                TotalCount: totalCount,
                Count: count,
                data: [userList],
                status: 'success',
            });
        } catch (err) {
            console.log('error: ', err);
        }
    }

    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userRepository = new UserRepository();
            userRepository.Create(req.body);
            res.status(200).send({
                message: 'Data created successfully',
                data: [req.body],
                status: 'success',
            });
        } catch (err) {
            console.log('error: ', err);
        }
    }

    update = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const userRepository = new UserRepository();
            userRepository.userUpdate(req.body);
            res.status(200).send({
                message: 'trainee updated successfully',
                data: [req.body]
            });
        } catch (err) {
            console.log('error: ', err);
        }
    }

    delete = async(req: Request, res: Response, next: NextFunction) => {
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
            console.log('error: ', err);
        }
    }

    login = async (req, res) => {
        try {
            console.log('I am in login route');
            const { email, password } = req.body;
            console.log(req.body.email);
            userModel.findOne({ email: (email) }, (err, docs) => {
                if (bcrypt.compareSync(password, docs.password)) {
                    console.log('Existing user is:', docs);
                    const token = jwt.sign({ docs }, config.secret_key, { expiresIn: '15m' });
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

    async me(req: Request, res: Response, next: NextFunction) {
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
    catch(err) {
        console.log(err);
    }
}

export default UserController.getInstance();