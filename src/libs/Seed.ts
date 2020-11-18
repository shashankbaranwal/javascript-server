import UserRepository from '../repositories/user/UserRepository';

const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
        .then(res => {
            if (res === 0) {
                console.log('Inserting Data');
                userRepository.createV({
                    name: 'Head-Trainer',
                    email: 'head.trainer@successive.tech',
                    role: 'head-trainer',
                    password: 'headhead'
                });
                userRepository.createV({
                    name: 'Trainer',
                    email: 'trainer@successive.tech',
                    role: 'trainer',
                    password: 'trainertrainer'
                });
            }
        })
        .catch(err => console.log(err));
};