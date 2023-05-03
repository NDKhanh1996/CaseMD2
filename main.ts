import {Admin} from "./src/Options/Admin";
import {UserManager} from "./src/UserManager/UserManager";
import {Member} from "./src/Options/Member";
import {ClientManager} from "./src/ClientManager/ClientManager";

//use throw error to stop undefined

// // create account
console.log('create account')
UserManager.createAccount('a', '1', 10000)
UserManager.createAccount('b', '1', 15000)
UserManager.createAccount('c', '1', 17000)
console.log('------------------------------------------------')

// buy pc
console.log('buy PC')
ClientManager.buyClient(4)
console.log('--------------------------------')

// // check login
console.log('check login')
UserManager.login('a', '1', 1)
UserManager.login('c', '1', 2)
UserManager.logoff('a')
console.log('------------------------------------------')

// // check info of user list
// // console.log('check info of user list')
console.table(UserManager.getList())
// // UserManager.getSize()
// // UserManager.getIndexByName('c')
// // console.log('---------------------------')
//
// // check info user
// console.log('check info user')
// // UserManager.getMoneyByName('ad')
// // UserManager.getPasswordByName('a')
// UserManager.setPasswordByName('d', 1234)
// // UserManager.setMoneyByName('d',999999)
// console.table(UserManager.getList())
// console.log('---------------------------------')
//
// // check info of client list
// console.log('check info of client list')
// console.table(ClientManager.getList(), ['clientName', 'onUsedBy'])
// // ClientManger.getSize()
// // ClientManger.getIndexByName(2)
export let loginName: string;

export function start(): void {
    const readlineSync = require('readline-sync');
    const options: string[] = ['admin', 'user'];
    let index = readlineSync.keyInSelect(options, 'Choose your role: ') + 1;
    switch (index) {
        case 1:
            const adminName = readlineSync.question('Enter your username: ');
            const adminPassword = readlineSync.question('Enter your password: ', {
                hideEchoBack: true
            });
            if (adminName === 'admin' && adminPassword === '1') {
                Admin.option()
            } else {
                console.log(`Invalid username or password`)
                start()
            }
            break;
        case 2:
            const username = readlineSync.question('Enter your username: ');
            loginName = username;
            const userPassword = readlineSync.question('Enter your password: ', {
                hideEchoBack: true
            });
            const clientName = +readlineSync.question('Enter clientName: ');
            if (UserManager.login(username, userPassword, clientName)) {
                Member.option();
            } else {
                console.log(`Invalid username or password`)
                start();
            }
            break;
    }
}

start();