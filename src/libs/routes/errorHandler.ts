import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err) => (req: Request, res: Response, next: NextFunction ) => {
    const { error, message, code} = err;
    res.json({
        error,
        status: code,
        message: message || 'Error',
        timestamp: new Date()
    });
};