import {User} from "./src/Users/User";
import {UserManager} from "./src/Users/UserManager";
import {ClientManger} from "./src/Clients/ClientManger";

// create account
UserManager.createAccount('a', 1, 10000)
UserManager.createAccount('b', 1, 15000)
UserManager.createAccount('c', 1, 17000)

// buy pc
ClientManger.buyClient()
ClientManger.buyClient()
ClientManger.buyClient()


// check info of user list
console.table(UserManager.getList())
UserManager.getSize()
UserManager.getIndexByName('c')

// check info user
// UserManager.getMoneyByName('b')
// UserManager.getPasswordByName('b')
// UserManager.setPasswordByName('a',1234)
// UserManager.setMoneyByName('b',999999)

// check info of client list
// console.table(ClientManger.getList())
// ClientManger.getSize()
// ClientManger.getIndexByName(2)