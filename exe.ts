import {UserManager} from "./src/UserManager/UserManager";
import {ClientManager} from "./src/ClientManager/ClientManager";
import {Admin} from "./src/UserManager/User/EndUsers/Admin";

ClientManager.buyClient(9)
UserManager.createAccount('a', 1, 10000)
UserManager.createAccount('b', 1, 15000)
UserManager.createAccount('c', 1, 17000)
UserManager.createAccount('d', 1, 16000)
UserManager.createAccount('e', 1, 18000)
//
//
// console.table(UserManager.getList())
// console.table(ClientManager.getList(), ['clientName', 'onUsedBy'])


export function start() {
    const readlineSync = require('readline-sync');
    const options = ['admin', 'user'];
    let index = +readlineSync.keyInSelect(options, 'Choose your role: ') + 1;

    switch (index) {
        case 1:
            const username = readlineSync.question('Enter your username: ');
            const password = readlineSync.question('Enter your password: ', {
                hideEchoBack: true
            });
            if (username === 'admin' && password === '1') {
                Admin.logged()
            }
            break;
        case 2:
            console.log('a')
            break;
    }
}

start()