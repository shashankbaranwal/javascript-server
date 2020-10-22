import { diamond , equilateral} from "./patterns"
//import { validateUsers , hasPermission} from './utils';
import { hasPermission , validateUsers} from "./utils"
import { permissions , users} from "./constants"

diamond(5)
equilateral(6)
hasPermission('getUsers', 'trainee', 'read')
validateUsers(users)