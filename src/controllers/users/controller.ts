import { Response, Request, NextFunction } from 'express';

class UserController {
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }
    get(_req: Request, res: Response, _next: NextFunction) {
        try {
            console.log('Inside get method of User Controller');
            res.send({
                message: 'User fetched successfully',
                data: [
                    {
                        name: 'User',
                        address: 'Noida'
                    }
                ]
            });
        }
        catch (err) {
            console.log('Inside err', err);
        }
    }
    create(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('Inside post method of User Controller');
            res.send({
                message: 'Users created successfully',
                data: {
                    name: 'User',
                    address: 'Noida'
                }
            });
        }
        catch (err) {
            console.log('inside err', err);
        }
    }
    update(_req: Request, res: Response, _next: NextFunction) {
        try {
            console.log('Inside put method of User Controller');
            res.send({
                message: 'User updated successfully',
                data: {
                    name: 'User',
                    address: 'Noida'
                }
            });

        } catch (err) {
            console.log('inside err', err);
        }
    }
    delete(_req: Request, res: Response, _next: NextFunction) {
        try {
            console.log('Inside delete method of User Controller');
            res.send({
                message: 'User deleted successfully',
                data: [
                    {
                        name: 'User',
                        address: 'Noida'
                    }
                ]
            });
        }
        catch (err) {
            console.log('Inside err', err);
        }
    }
}
export default UserController.getInstance();