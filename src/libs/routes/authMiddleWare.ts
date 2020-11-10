import * as jwt from 'jsonwebtoken';
import { hasPermission } from './permission';

import { Response, NextFunction } from 'express';

export const authMiddleWare = (moduleName: string, permissionType: string) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const auth = 'authorization';
        const token = req.headers[' authorization '];
        const decodeUser = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
        console.log(decodeUser);
        console.log(moduleName, decodeUser.role, permissionType);
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
    catch (err) {
        next({
            error: err,
            message: 'Unauthenticate Access',
            code: 404
        });
    }
};

