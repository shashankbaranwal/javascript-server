import { Request } from 'express';

export default interface IRequest extends Request {
    body: { email: any; password: any; };
    userData: string;
}