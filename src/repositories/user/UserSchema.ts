import * as mongoose from 'mongoose';
import VersionableSchema from '../versionable/VersionableSchema';

class UserSchema extends mongoose.Schema {
    constructor(collections: any) {
        const baseSchema = Object.assign({
            _id: String,
            name: String,
            email: String,
            role: String,
            password: String,
        });
        super(baseSchema, collections);
    }
}
export default UserSchema;