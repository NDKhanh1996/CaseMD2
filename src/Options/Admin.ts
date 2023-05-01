import {UserManager} from "../UserManager/UserManager";
import {ClientManager} from "../ClientManager/ClientManager";
import {start} from "../../main";

export class Admin {
    static option(): void {
        const readlineSync = require('readline-sync');
        const method: string[] = ['getUserList', 'getClientList', 'createAccount', 'buyClient', 'changeMoneyByName', 'setPasswordByName', 'logoffUser', 'getOnlineTime'];
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
                const money: number = +readlineSync.question('Enter money: ');
                UserManager.createAccount(username, password, money);
                Admin.option();
                break;
            }
            case 4: { // buy pc
                const numberOfClientWantToBuy: number = +readlineSync.question('Enter number of client you want: ');
                ClientManager.buyClient(numberOfClientWantToBuy);
                Admin.option();
                break;
            }

            case 5: { // changeMoneyByName
                const username = readlineSync.question('Enter username: ');
                const money: number = +readlineSync.question('Enter newMoney: ');
                UserManager.changeMoneyByName(username, money);
                Admin.option();
                break;
            }

            case 6: { // setPasswordByName
                const username = readlineSync.question('Enter username: ');
                const password = readlineSync.question('Enter password: ');
                UserManager.setPasswordByName(username, password);
                Admin.option();
                break;
            }
            case 7: { // logoffUser
                const username = readlineSync.question('Enter username: ');
                UserManager.logoff(username);
                Admin.option();
                break;
            }
            case 8:{ // getOnlineTime
                const username = readlineSync.question('Enter username: ');
                UserManager.getOnlineTimeByName(username);
                Admin.option();
                break;
            }
        }
    }
}

