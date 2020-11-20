import * as dotenv  from 'dotenv';
import IConfig from './IConfig';
const envVars = dotenv.config().parsed;
// import { config } from 'dotenv';

console.log('Inside config');
console.log(dotenv);
const config: IConfig = {
    PORT: envVars.PORT,
    NODE_ENV: envVars.NODE_ENV,
    MONGO_URL: envVars.MONGO_URL,
    secret_key: envVars.secret_key,
    password: envVars.password
};
Object.freeze(config);
export default config;