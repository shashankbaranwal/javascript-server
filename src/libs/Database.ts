import * as mongoose from 'mongoose';


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
            // tslint:disable-next-line: no-null-keyword
            resolve(null);
        });
    });
    }
    static disconnect() {
        console.log('Inside Disconnect method');
        mongoose.disconnect();
    }
}
export default database;