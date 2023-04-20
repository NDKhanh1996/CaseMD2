import {User} from "./src/Users/User";
import {UserManager} from "./src/Users/UserManager";

let userManager = new UserManager();

userManager.createAccount('a', 1, 10000)
userManager.createAccount('b', 1, 15000)
userManager.createAccount('c', 1, 17000)


// check info user list
console.table(userManager.userList)
// console.log(userManager.getSize())
// console.log(userManager.getIndexByName('c'))

// check info user
// userManager.getMoneyByName('b')
// userManager.getPasswordByName('b')
// userManager.setPasswordByName('a',1234)
// userManager.setMoneyByName('b',999999)
