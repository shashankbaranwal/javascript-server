export const users = [
    {
        TraineeEmail : 'shashank.baranawal@successive.tech',
        ReviewerEmail : 'naman.parashar@successive.tech',
    },
    {
        TraineeEmail : 'shashank.baranwal@gmail.com',
        ReviewerEmail : 'naman.parashar@gmail.com'
    }
]

export const permissions =
{
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        Delete: [],
    },
    'getUser': {
        all: ['head-trainer'],
        read: ['trainer'],
        write: ['trainee'],
        Delete: [],
    }
}