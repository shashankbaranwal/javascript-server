import {permissions} from '../constant'
export default function hasPermission(moduleName,role,permissionType){
    for(const [key,value] of Object.entries(permissions))
    {
        if (key == moduleName)
        {
            if(value.all.includes(role))
            {
                return true;
            }
            else{
                for(const [key1,value1] of Object.entries(value)){
                    if(key1== permissionType){
                        if(Object.values(value1).includes(role))
                        {
                            return true;
                        }
                        return false;
                    }
                    else{
                        continue;
                    }

                }
            }
        }
        else{
            continue;
        }

    }
}
// let result = hasPermission(getUsers,"head-trainer","all");
// console.log(result);
// let result_1 = hasPermission(getUsers,"trainee","read");
// console.log(result_1);
