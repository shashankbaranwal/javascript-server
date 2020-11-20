import * as mongoose from 'mongoose';

class UserSchema extends mongoose.Schema {
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