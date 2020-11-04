interface IUsers {
    traineeEmail: string;
    reviewerEmail: string;
};

type access = {
    all: string[];
    read: string[];
    write: string[];
    Delete: string[];
}

interface IPermissions {
    getUsers: access;
    getUser: access;
}