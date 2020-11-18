import * as bcrypt from 'bcrypt';
import UserRepository from '../repositories/user/UserRepository';

const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
        .then(res => {
            if (res === 0) {
                const rawPassword = process.env.password;
                const saltRounds = 10;
                const salt = bcrypt.genSaltSync(saltRounds);
                const hashedPassword = bcrypt.hashSync(rawPassword, salt);
                console.log('Data seeding in progress');
                userRepository.createUser({
                    name: 'trainer',
                    email: 'trainer@successivetech',
                    role: 'trainer',
                    password: hashedPassword
                }, undefined);
            }
        })
        .catch(err => console.log(err));
};