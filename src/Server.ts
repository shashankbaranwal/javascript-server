import * as express from 'express';
import * as bodyparser from 'body-parser';
import mainRouter from './router';
import Database from './libs/Database';
import { errorHandler } from './libs/routes/errorHandler';
import { notFoundRoute } from './libs/routes/notFoundRoute';
import * as swaggerJsDoc from 'swagger-jsdoc';
import * as swaggerUI from 'swagger-ui-express';
import * as cors from 'cors';
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
    initSwagger = () => {
        const options = {
            definition: {
                info: {
                    openapi: '3.0.0',
                    description: 'An express app performing CRUD operation after authentication',
                    version: '1.0.0',
                    title: 'First express app',
                    properties: {
                        email: 'shashank.baranawal@successive.tech'
                    },
                },
                securityDefinitions: {
                    Bearer: {
                        type: 'apiKey',
                        name: 'Authorization',
                        in: 'headers'
                    }
                }
            },
            basePath: '/api',
            swagger: '4.1',
            apis: ['./src/controllers/**/routes.ts'],
        };
        const swaggerSpec = swaggerJsDoc(options);
        return swaggerSpec;
    }
    public setupRouts() {
        const { app } = this;
        app.use(cors());
        app.use('/health-check', (_req, res) => {
            console.log('inside Second middleware');
            res.send('I am OK');
        });
        this.app.use('/api', mainRouter);
        app.use('/swagger', swaggerUI.serve, swaggerUI.setup(this.initSwagger()));
        this.app.use(notFoundRoute);
        this.app.use(errorHandler);

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
