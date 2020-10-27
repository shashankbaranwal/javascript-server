export const users = [
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