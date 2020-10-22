export let users = [
    {
        TraineeEmail : 'shashank.baranawal@successive.tech',
        ReviewerEmail : 'naman.parashar@successive.tech',
    },
    {
        TraineeEmail : 'shashank.baranwal@gmail.com',
        ReviewerEmail : 'naman.parashar@gmail.com'
    }
]

export let permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    },
    'getUsers1': {
        all: ['head-trainer','trainee',],
        read: [ 'trainer'],
        write: ['trainer'],
        delete: ['trainer'],
    },
    'getUsers2': {
        all: ['head-trainer'],
        read: ['trainee'],
        write: ['trainer', 'trainer'],
        delete: [],
    }
}