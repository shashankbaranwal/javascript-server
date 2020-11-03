import { Request, Response, NextFunction } from "express";
class traineeController {
    static instance: traineeController;

    static getInstance(){
        if(traineeController.instance){
            return traineeController.instance
        }

        traineeController.instance = new traineeController();
        return traineeController.instance;
    }

    get( req: Request, res: Response, next: NextFunction ) {
        try{
            console.log("Inside get method of Trainee Controller");
            res.send({
                message: "Trainees fetched successfully",
                data: [
                    {
                    name: "Trainee1",
                    address: "Noida"
                }
            ]

            });

        }
        catch(err){
            console.log("inside err", err);

        }

    }

    create( req: Request, res: Response, next: NextFunction ) {
        try{
            console.log("Inside post method of Trainee Controller");
            res.send({
                message: "Trainees created successfully",
                data: {
                    name: "Trainee1",
                    address: "Noida"
                }
             });

        }
        catch(err){
            console.log("inside err", err);

        }

    }


    update( req: Request, res: Response, next: NextFunction ) {
        try{
            console.log("Inside put method of Trainee Controller");
            res.send({
                message: "Trainees updated successfully",
                data: {
                    name: "Trainee1",
                    address: "Noida"
                }
             });

        }catch(err){
            console.log("inside err", err);

        }

    }

    Delete( req: Request, res: Response, next: NextFunction ) {
        try{
            console.log("Inside delete method of Trainee Controller");
            res.send({
                message: "Trainees Deleted successfully",
                data: {
                    name: "Trainee1",
                    address: "Noida"
                }
             });

        }catch(err){
            console.log("inside err", err);

        }

    }
}

export default traineeController.getInstance();