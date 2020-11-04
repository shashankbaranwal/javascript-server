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
                        name: "Shashank",
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

                message: "Trainee created  successfully",
                data: [
                    {
                        name: "Shashank",
                        address: "Noida"
                    }
                ]
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

    Delete( req: Request, res: Response, next: NextFunction ) {
        try{
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

export default traineeController.getInstance();
