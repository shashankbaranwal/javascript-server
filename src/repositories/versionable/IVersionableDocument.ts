import * as mongoose from 'mongoose';

export default interface IVersionable extends mongoose.Document {
    deletedAt: Date;
    originalId: string;
    createdAt: Date;
}