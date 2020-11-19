const config = {
    create: {
        password: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'Password is invalid'
        },
        email: {
            required: true,
            regex: /@successive.tech$/,
            in: ['body'],
            errorMessage: 'Email is invalid'
        }
    },
    delete: {
        id: {
            required: true,
            errorMessage: 'Id is required',
            in: ['params']
        }
    },
    get: {
        skip: {
            required: false,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: 'Skip is invalid',
        },
        limit: {
            required: false,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: 'Limit is invalid',
        }
    },
    update: {
        id: {
            required: true,
            string: true,
            in: ['body']
        },
        dataToUpdate: {
            in: ['body'],
            required: true,
            isObject: true,
            custom(dataToUpdate) {
                console.log('hey');
            }
        }
    }
};
export default config;