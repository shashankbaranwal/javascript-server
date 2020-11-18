import { Response, Request, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import IRequest from '../../IRequest';
import { config } from '../../config';
import UserRepository from '../../repositories/user/UserRepository';
import { payLoad } from '../../libs/routes/constant';
import * as bcrypt from 'bcrypt';

class UserController {

    public async me(req: IRequest, res: Response, next: NextFunction) {
        const id = req.query;
        const user = new UserRepository();

        await user.getUser({ id })
            .then((data) => {
                res.status(200).send({
                    message: 'User Fetched successfully',
                    'data': { data },
                    code: 200
                });
            });
    }

    public async create(req: IRequest, res: Response, next: NextFunction) {
        const { id, email, name, role, password } = req.body;
        const creater = req.userData._id;
        const user = new UserRepository();
        await user.createUser({ id, email, name, role, password }, creater)
            .then(() => {
                console.log(req.body);
                res.send({
                    message: 'User Created Successfully!',
                    data: {
                        'name': name,
                        'email': email,
                        'role': role,
                        'password': password
                    },
                    code: 200
                });
            });
    }

    public async update(req: IRequest, res: Response, next: NextFunction) {
        const { id, dataToUpdate } = req.body;
        console.log('id', id);
        console.log('dataToUpdate', dataToUpdate);
        const updator = req.userData._id;
        const user = new UserRepository();
        await user.updateUser(id, dataToUpdate, updator)
            .then((result) => {
                res.send({
                    data: result,
                    message: 'User Profile Updated',
                    code: 200
                });
            })
            .catch((err) => {
                res.send({
                    error: 'No Updated files found',
                    code: 404
                });
            });
    }

    public async delete(req: IRequest, res: Response, next: NextFunction) {
        const id = req.params.id;
        const remover = req.userData._id;
        const user = new UserRepository();
        await user.deleteData(id, remover)
            .then((result) => {
                res.send({
                    message: 'Deleted successfully',
                    code: 200
                });
            })
            .catch((err) => {
                res.send({
                    message: 'No deleted files found',
                    code: 404
                });
            });
    }

    public async login(req: IRequest, res: Response, next: NextFunction) {
        const { email, password } = req.body;
        const user = new UserRepository();
        Object.assign(payLoad , {email, password});
        UserRepository.findOne({email, password});
        await user.getUser({ email })
            .then((userData) => {
                if (userData === null) {
                    res.status(404).send({
                        err: 'User Not Found',
                        code: 404
                    });
                    return;
                }
                if (!(bcrypt.compareSync(req.body.password, password))) {
                    res.status(401).send({
                        err: 'Invalid Password',
                        code: 401
                    });
                    return;
                }
                const token = jwt.sign(userData.toJSON(), config.secret_key);
                res.send({
                    message: 'Login Successfull',
                    status: 200,
                    'token': token
                });
                return;
            });
    }
}

export default new UserController();