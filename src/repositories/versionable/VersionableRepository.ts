import * as mongoose from 'mongoose';
import { DocumentQuery, Query } from 'mongoose';
import IUsermodel from '../user/IUserModel';
import Database from '../../libs/Database';
import { idText } from 'typescript';
import { resolve } from 'path';
import { removeListener } from 'process';

export default class VersionRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }

    private model: M;

    constructor(model) {
        this.model = model;
    }

    public async create(options: any): Promise<D> {
        const id = VersionRepository.generateObjectId();
        const model = new this.model({
            ...options,
            _id: id,
            originalId: id
        });
        return await model.save();
    }

    public count(query: any): Query<number> {
        const finalQuery = { deletedAt: undefined, ...query };
        return this.model.countDocuments(finalQuery);
    }

    public getAll(query: any, projection: any = {}, options: any = {}): DocumentQuery<D[], D> {
        const finalQuery = { deletedAt: undefined, ...query };
        return this.model.find(finalQuery, projection, options);
    }

    public findOne(query: any, projection: any = {}, options: any = {}): DocumentQuery<D, D> {
        const finalQuery = { deletedAt: undefined, ...query };
        return this.model.findOne(finalQuery);
    }

    public find(query: any = {}, projection: any = {}, options: any = {}): DocumentQuery<D[], D> {
        const finalQuery = { deletedAt: undefined, ...query };
        return this.model.find(finalQuery, projection, options);
    }
    public getUsers(data: any) {
        return this.model.findOne(data);
    }
    public async delete(id: string): Promise<D> {
        const previous = await this.findOne({ originalId: id, deletedAt: undefined});
        if (previous) {
            return await this.invalidate(id);
        }
    }

    protected invalidate(id: string): DocumentQuery<D, D> {
        const query: any = { originalId: id, deletedAt: { $exists: false } };
        const data: any = { deletedAt: new Date() };
        const options = {
            upsert: true
        };
        return this.model.update(query, data, options);
    }
    public async update(data: IUsermodel): Promise<D> {
        console.log('looking for previous valid document');
        const prev = await this.findOne({ originalId: data.originalId, deletedAt: undefined });
        console.log('Prev :', prev);
        if (prev) {
            await this.invalidate(data.originalId);
        }
        else {
            return undefined;
        }
        console.log('Data:', data);
        const newData = Object.assign(JSON.parse(JSON.stringify(prev)), data);
        console.log('New Data :', newData);
        newData._id = VersionRepository.generateObjectId();
        delete newData.deleteAt;
        const model = new this.model(newData);
        return model.save();
    }
    public delete(id: any) {
        // tslint:disable-next-line: no-shadowed-variable
        return new Promise((resolve, reject) => {
            let originalData;
            this.findOne({ _id: id, deletedAt: undefined}).lean()
            .then((data) => {
                 console.log('data: ', data);
                 if (data === null) {
                     throw new Error('');
                 }
                 originalData = data;
                 const oldId = originalData._id;
                 const modelDelete = {
                     ...originalData,
                     deletedAt: Date.now()
                 };
                 this.model.updateOne({ _id: oldId}, modelDelete);
                 resolve(undefined);
            })
            .catch((err) => {
                 reject(err);
            });
        });
    }
}