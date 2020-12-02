import * as mongoose from 'mongoose';
import IVersionable from '../versionable/IVersionableDocument';

export default interface IUserModel extends IVersionable {
    id: string;
    name: string;
    email: string;
    role: string;
    password: string;
}