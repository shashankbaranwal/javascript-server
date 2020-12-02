import { NextFunction, Request, Response } from 'express';
// import { isNullOrUndefined } from 'util';
export const validationHandler = ( config ) => ( req: Request, res: Response, next: NextFunction  ) => {
    const error = [];
    Object.keys(config).forEach((keys) => {
        const inObject = config[keys];
        inObject.in.forEach(inside => {
            let value = req[inside][keys];
            const temp = {
                key : '',
                location: '',
                errorMessage: ''
            };
            if ((inObject.required) && !(value)) {
                temp.key = keys;
                temp.location = inside;
                temp.errorMessage = inObject.errorMessage || `${keys} is required`;
                error.push(temp);
                return;
            }
            value = value || inObject.default;
            if (!value) {
                return;
            }
            if ((inObject.number) && !(Number.isInteger(Number(value)))) {
                temp.key = keys;
                temp.location = inside;
                temp.errorMessage = inObject.errorMessage || `${keys}'s type is not number`;
                error.push(temp);
                return;
            }
            if ((inObject.string) && !(typeof value === 'string')) {
                temp.key = keys;
                temp.location = inside;
                temp.errorMessage = inObject.errorMessage || `${keys}'s type is not string`;
                error.push(Error);
                return;
            }
            const regex = inObject.regex;
            if ((regex) && !regex.test(value)) {
                temp.key = keys;
                temp.location = inside;
                temp.errorMessage = inObject.errorMessage || `${keys} is invalid`;
                error.push(temp);
                return;
            }
            if (inObject.isObject && (!(typeof value === 'object') || !(Object.entries(value).length))) {
                temp.key = keys;
                temp.location = inside;
                temp.errorMessage = `${keys} is invalid`;
                error.push(temp);
                return;
            }
        });
    });
    if (error.length) {
        return res.status(400).send(error);
    }
    next ();
};