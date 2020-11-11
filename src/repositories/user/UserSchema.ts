import * as mongoose from 'mongoose';
import VersionableSchema from '../versionable/VersionableSchema';

class UserSchema extends VersionableSchema {
    constructor(_collections: any) {
        const baseSchema = Object.assign({
            _id: String,
            name: String,
            email: String,
            role: String,
            password: String,
        });
        super(baseSchema, _collections);
    }
}
export default UserSchema;