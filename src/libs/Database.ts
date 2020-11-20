import * as mongoose from 'mongoose';
import Seed from './Seed';
class Database {
    static open(mongoURL) {
        return new Promise((resolve, reject) => {
        console.log('Inside open method');
        mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            Seed();
            resolve();
        });
    });
    }
    static disconnect() {
        mongoose.disconnect(err => {
            if (err) {
                console.log(err);
            }
            console.log('Database Disconnected');
        });
    }
}
export default Database;