import * as express from 'express';
import * as bodyparser from 'body-parser';
import mainRouter from './router';
import Database from './libs/Database';
import { errorHandler } from './libs/routes/errorHandler';
import { notFoundRoute } from './libs/routes/notFoundRoute';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
class Server {
    app;
    constructor(private config) {
        this.app = express();
    }
    bootstrap() {
        this.initBodyParser();
        this.setupRouts();
        return this;
    }
    public setupRouts() {
        const { app } = this;
        app.use('/health-check', (_req, res) => {
            console.log('inside Second middleware');
            res.send('I am OK');
        });
        this.app.use('/api', mainRouter);
        this.app.use(notFoundRoute);
        this.app.use(errorHandler);
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

        return this;
    }
    public initBodyParser() {
        this.app.use(bodyparser.json());
    }
    run() {
        const { app, config: { PORT } } = this;
        Database.open('mongodb://localhost:27017/express-training')
            .then((res) => {
                console.log('Succesfully connected to Mongo');
                app.listen(PORT, (err) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(`App is running on port ${PORT}`);
                        // Database.disconnect();
                    }
                });
            })
            .catch(err => console.log(err));
        // return this;
    }
}
export default Server;