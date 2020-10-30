import { Request, Response, NextFunction } from 'express'

export default notFoundRoute(req, res, next) => {
    next({
        error : "Not Found",
        code: 404
    })
}
