import { Request } from 'express';

export default interface IRequest extends Request {
    headers: any;
    query: any;
    params: any;
    body: any;
    userData: any;
}