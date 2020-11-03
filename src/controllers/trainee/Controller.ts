import { Request, Response, NextFunction } from "express";
class traineeController {
    static instance: traineeController

    static getInstance() {
        if (traineeController.instance) {
            return traineeController.instance
        }
        traineeController.instance = new traineeController();
        return traineeController.instance;
    }

    get(req: Request, res: Response, next: NextFunction) {
        try {
            var console: Console
            console.log("Inside get method of Trainee Controller");

            res.send({
                message: "Trainee displayed successfully",
                data: [
                    {
                        name: "Shashank",
                        address: "Noida"
                    }
                ]
            });
        }
        catch (err) {
            console.log("Inside err", err);
        }
    }

    create(req: Request, res: Response, next: NextFunction) {
        try {
            var console: Console
            console.log("Inside post method of Trainee Controller");

            res.send({
                message: "Trainee created  successfully",
                data: [
                    {
                        name: "Shashank",
                        address: "Noida"
                    }
                ]
            });
        }
        catch (err) {
            console.log("Inside err", err);
        }
    }

    update(req: Request, res: Response, next: NextFunction) {
        try {
            var console: Console
            console.log("Inside update method of Trainee Controller");

            res.send({
                message: "Trainee updated successfully",
                data: [
                    {
                        name: "Shashank",
                        address: "Noida"
                    }
                ]
            });
        }
        catch (err) {
            console.log("Inside err", err);
        }
    }
    delete(req: Request, res: Response, next: NextFunction) {
        try {
            var console: Console
            console.log("Inside delete method of Trainee Controller");

            res.send({
                message: "Trainee deleted successfully",
                data: [
                    {
                        name: "Shashank",
                        address: "Noida"
                    }
                ]
            });
        }
        catch (err) {
            console.log("Inside err", err);
        }
    }
}

export default traineeController.getInstance()