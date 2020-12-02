import { userModel } from '../repositories/user/UserModel';
import UserRepository from '../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
import { config } from '../config';

const userRepository: UserRepository = new UserRepository();

export default () => {
    console.log(config.PASSWORD);
    userRepository.countData()
        .then((res) => {
            if (res === 0) {
                console.log('Inserting Data...');
                userRepository.userCreate({
                    name: 'Head-Trainer',
                    email: 'headtrainer@successive.tech',
                    role: 'head.trainer',
                    password: config.PASSWORD
                });
            }
            else {
                console.log(res);

            }
        })
        .catch((err) => console.log(err));
};