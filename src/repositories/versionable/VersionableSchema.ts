import * as mongoose from 'mongoose';

export default class VersionalSchema extends mongoose.Schema {

    constructor(options: any, collections: any) {
        const versionedOptions = Object.assign({
            createdAt: {
                default: Date.now,
                type: Date
            },
            deletedAt: {
                required: false,
                type: Date
            },
            originalId: {
                required: true,
                type: String,
            }}, options);
        super(versionedOptions, collections);
    }
}