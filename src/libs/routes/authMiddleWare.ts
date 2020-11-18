import * as jwt from 'jsonwebtoken';
import { hasPermission } from './permission';
import { config } from '../../config';
import { Response, NextFunction } from 'express';
import UserRepository from '../../repositories/user/UserRepository';


export const authMiddleWare = (module, permission) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        let decodeUser: any;
        const authorization = 'authorization';
        const secret = config.secret_key;
        const token = req.headers[authorization];
        if (!token) {
            next ({
                message: 'Token not found',
                error: 'Authentication Failed',
                status: 403
            });
        }
        decodeUser = jwt.verify(token, 'secret_key');
        const { email, password } = decodeUser;
        if (!email || !password) {
            next({
                message: 'Email or Password not in token',
                error: 'Authentication failed',
                status: 403
            });
        }
        const userRepository = new UserRepository();
        const data = await userRepository.findOne({email, password});
        if (!data) {
            next({
                message: 'User is empty',
                error: 'Authetication failed',
                status: 403
            });
        }
        if (!data.role) {
            next({
                message: 'role not found',
                error: 'Authentication Failed',
                status: 403
            });
            return;
        }
        if (!hasPermission(module, data.role, permission)) {
            return next({
                message: `${data.role} does not have ${permission} permission in ${module}`,
                error: 'unauthorized',
                status: 403
            });
        }
        res.locals.userData = data;
    next();
    }
    catch (err) {
        next({
            message: 'User is Invalid',
            error: 'Uthentication Failed',
            status: 403
        });
    }
};