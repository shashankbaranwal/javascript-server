import * as mongoose from 'mongoose';
import { DocumentQuery, Query } from 'mongoose';
import * as bcrypt from 'bcrypt';

export default class VersioningRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }

    private model: M;

    constructor(model) {
        this.model = model;
    }

    public async userCreate(options: any): Promise<D> {
        const id = VersioningRepository.generateObjectId();
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

    public count(query: any): Query<number> {
        const finalQuery = { deletedAt: undefined, ...query };
        return this.model.countDocuments(finalQuery);
    }

    public getAll(query: any, projection: any = {}, options: any = {}): DocumentQuery<D[], D> {
        const finalQuery = { deletedAt: undefined, ...query };
        return this.model.find(finalQuery, projection, options);
    }

    protected findOne(query: any): DocumentQuery<D, D> {
        const finalQuery = { deletedAt: undefined, ...query };
        return this.model.findOne(finalQuery);
    }

    protected find(query: any = {}, projection: any = {}, options: any = {}): DocumentQuery<D[], D> {
        const finalQuery = { deletedAt: undefined, ...query };
        return this.model.find(finalQuery, projection, options);
    }

    protected invalidate(id): DocumentQuery<D, D> {
        const query: any = { originalId: id, deletedAt: { $exists: false } };
        const data: any = { deletedAt: Date.now() };
        return this.model.updateOne(query, data);
    }

    public async delete(id: any): Promise<D> {
        console.log(id.originalId);
        const prev = await this.findOne({ originalId: id.originalId, deletedAt: undefined });
        if (prev) {
            return await this.invalidate(id.originalId);
        }
        else {
            return undefined;
        }
    }

    public async userUpdate(data: any): Promise<D> {
        console.log('Looking for previous valid document');
        const prev = await this.findOne({ originalId: data.originalId, deletedAt: undefined });
        console.log('Prev: ', prev);

        if (prev) {
            await this.invalidate(data.originalId);
        }
        else {
            return undefined;
        }

        console.log('Data: ', data);
        const newData = Object.assign(JSON.parse(JSON.stringify(prev)), data);
        console.log('New Data:', newData);
        newData._id = VersioningRepository.generateObjectId();
        delete newData.deletedAt;

        const model = new this.model(newData);
        return model.save();
    }
}