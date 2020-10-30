import * as express from "express";
import * as bodyParser from "body-parser";
import  errorHandler  from './libs/routes/errorHandler'
import  notFoundRoute from './libs/routes/notFoundRoute'

class Server{
    app
    constructor(private config){
        this.app=express()
    }
    bootstrap(){
        this.setupRouts()
        return this;
    }
    public setupRouts(){
        const { app }=this;
        app.use('/health-check',(req, res)=>{
            console.log("inside Second middleware");
            res.send("I am OK");
        });

        this.app.use(notFoundHandler);
        this.app.use(errorHandler);
        return this;
    }
    public initBodyParser(){
        this.app.use(bodyParser.json( {type : 'application/**json'}))
    }
    run(){
        const {app, config:{PORT}}=this;
        app.listen(PORT,(err)=>{
            if (err) {
                console.log( err );
                
            }
            console.log(`App is running on port ${PORT}`);

        })
    }
}
export default Server;
