export const users = [
    {
        traineeEmail: 'shashank.baranwal@gmail.com',
        reviewerEmail: 'naman.parashar@gmail.com'
    },
    {
        traineeEmail: 'shashank.baranwal@successive.tech',
        reviewerEmail: 'naman.parashar@succesive.tech'
    }
];

export let permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        Delete: [],
    },
    'getUser': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        Delete: []
    }
};

export const payLoad = {
    'iss': 'Successive Technologies',
    'iat': 1604858574,
    'exp': 1636394601,
    'aud': 'www.successive.in',
    'sub': 'Learn and Implement',
    'email': '',
    'password': ''
};