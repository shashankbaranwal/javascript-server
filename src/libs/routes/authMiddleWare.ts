import * as jwt from 'jsonwebtoken';
import { hasPermission } from './permission';

import { Response, NextFunction } from 'express';

export const authMiddleWare = (moduleName: string, permissionType: string) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('the config is ', moduleName, permissionType);
        console.log('Header is : ', req.headers);
        const auth = 'authorization';
        const token = req.headers[' authorization '];
        const decodeUser = jwt.verify(token, 'config.secret_key');
        console.log('User', decodeUser);
        console.log(moduleName, decodeUser.role, permissionType);
        if ( decodeUser.role ) {
            if (hasPermission(moduleName, decodeUser.role, permissionType)) {
                next();
            }
            else {
                next({
                    error: 'Unauthorized Access',
                    message: 403
                });
            }
        }
        else {
            next( { error: 'Token does not exist '});
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

