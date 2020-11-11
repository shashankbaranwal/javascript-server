import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersionableRepository from '../versionable/VersionableRepository';
export default class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {
    userUpdate(body: any) {
        throw new Error('Method not implemented.');
    }
    findAll(body: any, arg1: {}, arg2: {}) {
        throw new Error('Method not implemented.');
    }
    updateUser(body: any) {
        throw new Error('Method not implemented.');
    }
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    public static findOne(query): mongoose.DocumentQuery<IUserModel, IUserModel, {}> {
        return userModel.findOne(query).lean();
    }
    constructor() {
        super(userModel);
    }
    public find(query, projection?: any, options?: any): any {
        return userModel.find(query, projection, options);
    }
    public create(data): Promise<IUserModel> {
        console.log('UserRepository:: create', data);
        const id = UserRepository.generateObjectId();
        const model = new userModel({
            _id: id,
            ...data,
        });
        return model.save();
    }
    public count() {
        return userModel.countDocuments();
    }
}