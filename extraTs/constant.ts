

export const users : IUsers[] = [
    {
        traineeEmail : 'shashank.baranwal@gmail.com',
        reviewerEmail : 'naman.parashar@gmail.com'
    },
    {
        traineeEmail : 'shashank.baranwal@successive.tech',
        reviewerEmail : 'naman.parashar@succesive.tech'
    }
]

export let permissions: IPermission = {
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [],
    }
};