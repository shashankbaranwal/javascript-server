import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
import * as bcrypt from 'bcrypt';

import VersionableRepository from '../versionable/VersionableRepository';

export default class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {

    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    constructor() {
        super(userModel);
    }
    public static readOne(query): mongoose.DocumentQuery<IUserModel, IUserModel, {}> {
        return userModel.findOne(query).lean();
    }

    public async Create(options: any): Promise<IUserModel> {
        const id = VersionableRepository.generateObjectId();
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(options.password, salt);
        options.password = hash;
        const model = new this.model({
            _id: id,
            originalId: id,
            ...options,
        });
        return await model.save();
    }
    public update(id) {
        return super.userUpdate(id);
    }

    public deleteData(id) {
        return super.delete(id);
    }

    public getList(query: any, projection: any = {}, options: any = {}, sort: any = {}): mongoose.DocumentQuery<IUserModel[], IUserModel> {
        options.limit = options.limit || 0;
        options.skip = options.skip || 0;
        const finalQuery = { deletedAt: undefined, ...query };
        return this.model.find(finalQuery, projection, options).sort({...sort});
    }
    public countData() {
        return userModel.countDocuments();
    }
}