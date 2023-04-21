import {User} from "./src/UserManager/User/User";
import {Client} from "./src/ClientManager/Clients/Client";
import {UserManager} from "./src/UserManager/UserManager";
import {ClientManger} from "./src/ClientManager/ClientManger";

// create account
console.log('create account')
UserManager.createAccount('a', 1, 10000)
UserManager.createAccount('b', 1, 15000)
UserManager.createAccount('c', 1, 17000)
console.log('------------------------------------------------')

// buy pc
console.log('buy PC')
ClientManger.buyClient(4)
console.log('--------------------------------')

// check login
console.log('check login')
UserManager.login('a',1,1)
UserManager.login('c',1,3)
console.log('------------------------------------------')

// check info of user list
// console.log('check info of user list')
// console.table(UserManager.getList())
// UserManager.getSize()
// UserManager.getIndexByName('c')
// console.log('---------------------------')

// check info user
console.log('check info user')
UserManager.getMoneyByName('d')
UserManager.getPasswordByName('d')
// UserManager.setPasswordByName('a',1234)
// UserManager.setMoneyByName('i',999999)
console.table(UserManager.getList())
console.log('---------------------------------')

// check info of client list
console.log('check info of client list')
console.table(ClientManger.getList(),['clientName', 'onUsedBy'])
// ClientManger.getSize()
// ClientManger.getIndexByName(2)



