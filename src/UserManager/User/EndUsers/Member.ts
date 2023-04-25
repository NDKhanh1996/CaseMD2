import {Admin} from "./Admin";
import {start} from "../../../../main";
import {UserManager} from "../../UserManager";

export class Member extends Admin{
    static option() {
        const readlineSync = require('readline-sync');
        const method = ['getMoneyByName', 'getPasswordByName', 'setPasswordByName', 'login', 'logoff'];
        const index = readlineSync.keyInSelect(method, 'choose what to do: ', {cancel: 'RETURN'}) + 1;
        switch (index) {
            case 0: // Return
                start();
                break;
            case 1: { // getMoneyByName
                const username = readlineSync.question('Enter username: ');
                UserManager.getMoneyByName(username);
                Member.option();
                break;
            }
            case 2: { // getPasswordByName
                const username = readlineSync.question('Enter username: ');
                UserManager.getPasswordByName(username);
                Member.option();
                break;
            }
            case 3: { // setPasswordByName
                const username = readlineSync.question('Enter username: ');
                const password = readlineSync.question('Enter password: ');
                UserManager.setPasswordByName(username, password);
                Member.option();
                break;
            }
            case 4: { // login
                const username = readlineSync.question('Enter username: ');
                const password = readlineSync.question('Enter password: ');
                const clientName = +readlineSync.question('Enter clientName: ')
                UserManager.login(username, password, clientName);
                Member.option();
                break;
            }
            case 5: { // logoff
                const username = readlineSync.question('Enter username: ');
                UserManager.logoff(username);
                Member.option();
                break;
            }
        }
    }
}