import * as jwt from 'jsonwebtoken';
import { hasPermission } from './permission';
import IRequest from '../../IRequest';
import { Response, NextFunction } from 'express';
import { config } from '../../config';
export const authMiddleWare = (module: any, permissionType: string) => (req: IRequest, res: Response, next: NextFunction) => {

    try {
        console.log('Inside ValidationHandler Middleware');
        console.log('config is', module, permissionType);
        const token = req.headers.authorization;
        console.log(token);
        const secretKey = config.secret_key;
        const User = jwt.verify(token, 'secret_key');
        console.log('user', User.result);
        req.userData = User.result;
        console.log(User.result.role);
        const result = hasPermission(module, User.result.role, permissionType);
        console.log('result is', result);
        if (result === true)
            next();
        else {
            next({
                message: 'Unauthorised',
                status: 403
            });
        }
    }
    catch (err) {
        next({
            message: err
        });
    }
};