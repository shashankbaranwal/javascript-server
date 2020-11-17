import { Request } from 'express';

export default interface IRequest extends Request {
    query: any;
    params: any;
    body: { email: any; password: any; };
    userData: string;
}