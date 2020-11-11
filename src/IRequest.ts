import { Request } from 'express';

export default interface IRequest extends Request {
    params: any;
    body: { email: any; password: any; };
    userData: string;
}