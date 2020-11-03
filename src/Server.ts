import * as express from "express";
import mainRouter from './Router';
import  errorHandler  from './libs/routes/errorHandler'
import  notFoundRoute from './libs/routes/notFoundRoute';

import * as bodyparser from 'body-parser';

class Server {

private app: any;
constructor(private config) {
this.app = express();
}

bootstrap() {
    this.initBodyParser();
    this.SetupRoutes();
    return this;
}
SetupRoutes() {
    //const {app} = this;
    this.app.get('/health-check', (req, res, next) => {
    res.send('i am ok');
});

this.app.use('/api', 'routes');

this.app.use(notFoundRoute);
this.app.use(errorHandler);

}
public initBodyParser(){
    this.app.use(bodyparser.json());
}
run() {
    const {app, config: {PORT}} = this;
    app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`App is running on port ${PORT}`);
    // tslint:disable-next-line: semicolon
    });
    return this;
}
}
export default Server;