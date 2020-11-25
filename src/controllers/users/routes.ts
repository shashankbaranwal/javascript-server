import * as express from 'express';
import UserController from './controller';
import { authMiddleWare } from '../../libs/routes/authMiddleWare';
import { permissions } from '../../libs/routes/constant';
import { validationHandler } from '../../libs/routes/validationHandler';
import config from './validation';
const userRouter = express.Router();

userRouter.route('/')
// /**
//  * @swagger
//  *
//  * /api/user:
//  *      get:
//  *        description: List of all the trainees
//  *        security:
//  *          - Bearer: []
//  *        consumes:
//  *          - application/json
//  *        produces:
//  *          - application/json
//  *        parameters:
//  *          - name: skip
//  *            description: Number of elements to skip
//  *            in: query
//  *            required: false
//  *            type: number
//  *          - name: limit
//  *            description: Elements to show
//  *            in: query
//  *            required: false
//  *            type: number
//  *          - name: sort
//  *            description: Elements to sort (name or email)
//  *            in: query
//  *            required: false
//  *            type: string
//  *          - name: sortedBy
//  *            description: Elements to sort By(email or name)
//  *            in: query
//  *            required: false
//  *            type: string
//  *          - name: searchBy
//  *            description: Elements to search
//  *            in: query
//  *            required: false
//  *            type: string
//  *        response:
//  *          200:
//  *            description: Trainee List
//  *            schema:
//  *                 properties:
//  *                     status:
//  *                         example: Okay
//  *                     message:
//  *                         example: 'Successfully fetched Trainee'
//  *                     TotalCount:
//  *                         example: 10
//  *                     UserCount:
//  *                         example: 2
//  *                     data:
//  *                         type: object
//  *                         allOf:
//  *                                 - $ref: '#/definitions/UserResponse
//  *          403:
//  *            description: unauthorised access
//  *            schema:
//  *                 $ref: '#/definitions/Unauthorized
//  */
    .get(UserController.get)                                       // authMiddleWare('getUser', 'read'), validationHandler(validation.get),
    .post(UserController.create)                                  // authMiddleWare('getUser', 'read'), validationHandler(validation.create),
    .put( UserController.update)                                 // authMiddleWare('getUser', 'read'), validationHandler(validation.update),
    .delete(UserController.delete);                             // authMiddleWare('getUser', 'read'), validationHandler(validation.delete),
userRouter.route('/login')
    .post(UserController.login);
userRouter.route('/me')
    .get(authMiddleWare('getUsers', 'read'), UserController.me);



export default userRouter;