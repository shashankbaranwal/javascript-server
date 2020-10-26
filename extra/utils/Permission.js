const permissions =
{
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainer'],
        write: ['trainee'],
        Delete: [],
    },
    'getUser1': {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        Delete: ['trainee'],
    }
}

const {getUsers,getUser1}= permissions;
    let temp;
    function hasPermission(moduleName,role,permissionType)
    {
        const {all,read,write,Delete}=moduleName;
         temp = all.includes(role)

        if(temp==true)
        {
            return true
        }
        else
        {
            if(permissionType=="read")
            {
                temp=read.includes(role)
                return temp;  
            }
            else if(permissionType=="write"){
                temp=write.includes(role);
                return temp;
            }
            else if(permissionType=="Delete"){
                temp=Delete.includes(role)
                return temp;
            }

        }

    }
let result = hasPermission(getUsers,"head-trainer","Delete");
console.log(result);
let result_1 = hasPermission(getUser1,"trainer","Delete");
console.log(result_1);