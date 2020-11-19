import UserRepository from '../repositories/user/UserRepository';

const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
        .then(res => {
            if (res === 0) {
                console.log('Inserting Data');
                userRepository.create({
                    name: 'Head-Trainer',
                    email: 'head.trainer@successive.tech',
                    role: 'head-trainer',
                    password: 'headhead'
                });
                userRepository.create({
                    name: 'Trainer',
                    email: 'trainer@successive.tech',
                    role: 'trainer',
                    password: 'trainertrainer'
                });
            }
        })
        .catch(err => console.log(err));
};