import { Response, Request, NextFunction } from 'express';

// tslint:disable-next-line: class-name
class userController {
    static instance: userController;

    static getInstance() {
        if (userController.instance) {
            return userController.instance;
        }

        userController.instance = new userController();
        return userController.instance;
    }
    get(_req: Request, res: Response, _next: NextFunction) {
        try {
            console.log('Inside get method of User Controller');
            res.send({
                message: 'User fetched successfully',
                data: [
                    {
                        name: 'User1',
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
                    name: 'User1',
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
                    name: 'User1',
                    address: 'Noida'
                }
            });

        } catch (err) {
            console.log('inside err', err);
        }
    }
    Delete(_req: Request, res: Response, _next: NextFunction) {
        try {
            console.log('Inside delete method of User Controller');
            res.send({
                message: 'User deleted successfully',
                data: [
                    {
                        name: 'User1',
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
export default userController.getInstance();