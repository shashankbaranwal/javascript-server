import * as mongoose from 'mongoose';
import Seed from './Seed';

// tslint:disable-next-line: class-name
class database {
    static open(mongoURL) {
        return new Promise((resolve, reject) => {
        console.log('Inside open method');
        mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            // tslint:disable-next-line: no-unused-expression
            Seed();
            // tslint:disable-next-line: no-null-keyword
            resolve(null);
        });
    });
    }
    static disconnect() {
        console.log('Inside Disconnect method');
        mongoose.connection.close();
        console.log('disocnnecyted');
    }
}
export default database;