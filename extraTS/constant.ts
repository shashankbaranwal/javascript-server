import { Ipermission } from "./interfaces"


export const permissions: Ipermission=
{
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    }
}
// //now  export permissions from constants.js
// export {permissions};