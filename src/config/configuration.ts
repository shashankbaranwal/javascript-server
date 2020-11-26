import { IConfig } from './IConfig';
import * as dotenv from 'dotenv';

const envVars = dotenv.config().parsed;
const config: IConfig = {
    port: envVars.PORT,
    nodeenv: envVars.NODE_ENV,
    mongourl:  envVars.MONGO_URL,
    secret_key: envVars.secret_key,
};
Object.freeze(config);
// config.PORT=7000;
export default config;