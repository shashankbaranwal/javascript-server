import * as jwt from 'jsonwebtoken';
import { hasPermission } from './permission';
import IRequest from '../../IRequest';
import { Response, NextFunction } from 'express';
import { config } from '../../config';
import UserRepository from '../../repositories/user/UserRepository';
export const authMiddleWare = (module, permissionType) => (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decorderUser = jwt.verify(token, config.secret_key);
        if (hasPermission(module, decorderUser.docs.role, permissionType)) {
            console.log('Has permission.');
        }
        else {
            throw Error;
        }
        next();
    }
    catch (err) {
        res.send({
            error: 'Unauthorized',
            code: 403,
        });
    }
};