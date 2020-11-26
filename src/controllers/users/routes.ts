import * as express from 'express';
import UserController from './controller';
import { authMiddleWare } from '../../libs/routes/authMiddleWare';
import { permissions } from '../../libs/routes/constant';
import { validationHandler } from '../../libs/routes/validationHandler';
import config from './validation';
const userRouter = express.Router();

userRouter.route('/')
    .get(UserController.get)                                       // authMiddleWare('getUser', 'read'), validationHandler(validation.get),
// /**
//  * @swagger
//  *
//  * /api/User:
//  *  post:
//  *    description: Returns the success response on creation
//  *    security:
//  *         - Bearer: []
//  *    produces:
//  *         - application/json
//  *    parameters:
//  *         - name: user
//  *           description: Data of users
//  *           in: body
//  *           required: true
//  *           type: object
//  *           schema:
//  *               $ref: '#/definitions/UserPost
//  *    response:
//  *      200:
//  *           description: User Created Successfully
//  *           schema:
//  *                oneOf:
//  *                properties:
//  *                    status:
//  *                        example: OK
//  *                    messgae:
//  *                        example: Trainee Created Successfully
//  *                    data:
//  *                        type: object
//  *                        allOf:
//  *                            - $ref: '#/definitions/Trainee Response'
//  *                        properties:
//  *                               name:
//  *                                   type: string
//  *                                   example: "Shashank"
//  *    403:
//  *      description: unauthorised access
//  *      schema:
//  *           $ref: '#/definitions/Unauthorized
//  */

    .post(UserController.create)                                  // authMiddleWare('getUser', 'read'), validationHandler(validation.create),
// /**
//  * @swagger
//  *
//  * /api/User:
//  *  put:
//  *    description: Returns the success response on Updation
//  *    security:
//  *         - Bearer: []
//  *    produces:
//  *         - application/json
//  *    parameters:
//  *         - name: user
//  *           description: Data of users.
//  *           in: body
//  *           required: true
//  *           type: object
//  *           schema:
//  *            oneOf:
//  *            properties:
//  *                id:
//  *                   example: 5e4e6e93c095d84d34045a30
//  *                dateToUpdate:
//  *                   type: object
//  *                   allOf:
//  *                       - $ref: '#/definitions/UserPost
//  *    response:
//  *      200:
//  *           description: User Updated Successfully
//  *           schema:
//  *                oneOf:
//  *                properties:
//  *                    status:
//  *                        example: OK
//  *                    messgae:
//  *                        example: Trainee Created Successfully
//  *                    data:
//  *                        type: object
//  *                        allOf:
//  *                            - $ref: '#/definitions/TraineeResponse'
//  *    403:
//  *      description: unauthorised access
//  *      schema:
//  *           $ref: '#/definitions/Unauthorized
//  */
//     .put( UserController.update)                                 // authMiddleWare('getUser', 'read'), validationHandler(validation.update),
// /**
//  * @swagger
//  *
//  * /api/User:
//  *  delete:
//  *    description: Returns the success response on deletion
//  *    security:
//  *         - Bearer: []
//  *    produces:
//  *         - application/json
//  *    parameters:
//  *         - name: id
//  *           description: ID of user to be deleted
//  *           in: body
//  *           required: true
//  *           type: string
//  *           example: 5e4e6e93c095d84d34045a30
//  *    response:
//  *      200:
//  *           description: User Data Deleted Successfully
//  *           schema:
//  *                oneOf:
//  *                properties:
//  *                    status:
//  *                        example: OK
//  *                    messgae:
//  *                        example: Trainee Deleted Successfully
//  *                    code:
//  *                        example: 200
//  *    403:
//  *      description: unauthorised access
//  *      schema:
//  *           $ref: '#/definitions/Unauthorized
//  */
    .delete(UserController.delete);                             // authMiddleWare('getUser', 'read'), validationHandler(validation.delete),
userRouter.route('/login')
    .post(UserController.login);
userRouter.route('/me')
    .get(authMiddleWare('getUsers', 'read'), UserController.me);

export default userRouter;