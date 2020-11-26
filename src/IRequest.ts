import { Request } from 'express';

export default interface IRequest extends Request {
    headers: any;
    body: { email: any; password: any; };
    userData: any;
}