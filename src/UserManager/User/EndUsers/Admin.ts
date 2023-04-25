import {UserManager} from "../../UserManager";
import {ClientManager} from "../../../ClientManager/ClientManager";
import {start} from "../../../../main";

export class Admin {
    static option() {
        const readlineSync = require('readline-sync');
        const method = ['getUserList', 'getClientList', 'createAccount', 'getMoneyByName', 'setMoneyByName', 'getPasswordByName', 'setPasswordByName', 'login', 'logoff'];
        const index = readlineSync.keyInSelect(method, 'choose what to do: ', {cancel: 'RETURN'}) + 1;
        switch (index) {
            case 0: // Return
                start();
                break;
            case 1: // getUserList
                console.table(UserManager.getList());
                Admin.option();
                break;
            case 2: // getClientList
                console.table(ClientManager.getList());
                Admin.option();
                break;
            case 3: { // createAccount
                const username = readlineSync.question('Enter username: ');
                const password = readlineSync.question('Enter password: ');
                const money = readlineSync.question('Enter money: ');
                UserManager.createAccount(username, password, money);
                Admin.option();
                break;
            }
            case 4: { // getMoneyByName
                const username = readlineSync.question('Enter username');
                UserManager.getMoneyByName(username);
                Admin.option();
                break;
            }
            case 5: { // setMoneyByName
                const username = readlineSync.question('Enter username');
                const money = readlineSync.question('Enter newMoney');
                UserManager.setMoneyByName(username, money);
                Admin.option();
                break;
            }
            case 6: { // getPasswordByName
                const username = readlineSync.question('Enter username');
                UserManager.getPasswordByName(username);
                Admin.option();
                break;
            }
            case 7: { // setPasswordByName
                const username = readlineSync.question('Enter username');
                const password = readlineSync.question('Enter password: ');
                UserManager.setPasswordByName(username, password);
                Admin.option();
                break;
            }
            case 8: { // login
                const username = readlineSync.question('Enter username');
                const password = readlineSync.question('Enter password: ');
                const clientName = readlineSync.question('Enter clientName')
                UserManager.login(username, password, clientName);
                Admin.option();
                break;
            }
            case 9: { // logoff
                const username = readlineSync.question('Enter username');
                UserManager.logoff(username);
                Admin.option();
                break;
            }
        }
    }
}