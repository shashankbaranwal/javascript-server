let d;
let permissions =
{
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
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
    let f;
    function hasPermission(moduleName,role,permissionType)
    {
        const {all,read,write,Delete}=moduleName;
         f = all.includes(role)

        if(f==true)
        {
            return true
        }
        else
        {
            if(permissionType=="read")
            {
                f=read.includes(role)
                return f;
            }
            else if(permissionType=="write"){
                f=write.includes(role);
                return f;
            }
            else if(permissionType=="Delete"){
                f=Delete.includes(role)
                return f;
            }

        }

    }
    d = hasPermission(getUsers,"head-trainer","Delete");
    console.log(d);
    d = hasPermission(getUser1,"trainer","Delete");
    console.log(d);
