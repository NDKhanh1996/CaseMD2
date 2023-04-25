import {UserManager} from "../../UserManager";
import {ClientManager} from "../../../ClientManager/ClientManager";
import {start} from "../../../../exe";

export class Admin {
    static option() {
        const readlineSync = require('readline-sync');
        const method = ['getUserList', 'getClientList', 'createAccount', 'getMoneyByName', 'setMoneyByName', 'getPasswordByName', 'setPasswordByName'];
        const index = readlineSync.keyInSelect(method, 'choose what to do: ', {cancel: 'RETURN'}) + 1;
        switch (index) {
            case 0:
                start();
                break;
            case 1:
                console.table(UserManager.getList());
                Admin.option();
                break;
            case 2:
                console.table(ClientManager.getList());
                Admin.option();
                break;
            case 3: {
                const username = readlineSync.question('Enter username: ');
                const password = readlineSync.question('Enter password: ');
                const money = readlineSync.question('Enter money: ');
                UserManager.createAccount(username, password, money);
                Admin.option();
                break;
            }
            case 4: {
                const username = readlineSync.question('Enter username');
                UserManager.getMoneyByName(username);
                Admin.option();
                break;
            }
            case 5: {
                const username = readlineSync.question('Enter username');
                const money = readlineSync.question('Enter newMoney');
                UserManager.setMoneyByName(username, money);
                Admin.option();
                break;
            }
            case 6: {
                const username = readlineSync.question('Enter username');
                UserManager.getPasswordByName(username);
                Admin.option();
                break;
            }
            case 7: {
                const username = readlineSync.question('Enter username');
                const password = readlineSync.question('Enter password: ');
                UserManager.setPasswordByName(username, password);
                Admin.option();
                break;
            }
        }
    }
}