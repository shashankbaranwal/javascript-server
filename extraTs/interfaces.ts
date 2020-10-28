interface IPermission {
    'getUsers' :{
        all: String[];
        read: String[];
        write:String[];
        delete:String[];
    }
}
interface IUsers {
    traineeEmail: string;
    reviewerEmail: string;
};
