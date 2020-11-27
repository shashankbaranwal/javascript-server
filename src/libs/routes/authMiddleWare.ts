import * as jwt from 'jsonwebtoken';
import { hasPermission } from './permission';
import { config } from '../../config';
import { Response, NextFunction } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import IRequest from '../../IRequest';


export const authMiddleWare = (moduleName: string, permissionType: string) => async (req: IRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization;
        const decodeUser = jwt.verify(token, 'secret_key');
        console.log(decodeUser);
        const UserRole = decodeUser.role;
        req.userData = decodeUser;
        console.log('Role is ', UserRole);
        if (UserRole) {
            if (hasPermission(moduleName, UserRole, permissionType)) {
                console.log('true');
                next();
            }
            else {
                next({
                    error: 'Unauthorized Access',
                    message: 403
                });
            }
        }
    }
    catch (err) {
        next({
            error: err,
            message: 'Unauthenticate Access',
            code: 404
        });
    }
};