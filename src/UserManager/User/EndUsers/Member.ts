import {Admin} from "./Admin";
import {loginName, start} from "../../../../main";
import {UserManager} from "../../UserManager";

export class Member extends Admin {
    static option() {
        const readlineSync = require('readline-sync');
        const method = ['getMoney', 'getPassword', 'setPassword', 'logoff'];
        const index = readlineSync.keyInSelect(method, 'choose what to do: ', {cancel: 'RETURN'}) + 1;
        switch (index) {
            case 0: { // RETURN
                start();
                break;
            }
            case 1: { // getMoney
                UserManager.getMoneyByName(loginName);
                Member.option();
                break;
            }
            case 2: { // getPassword
                UserManager.getPasswordByName(loginName);
                Member.option();
                break;
            }
            case 3: { // setPassword
                const password = readlineSync.question('Enter password: ');
                UserManager.setPasswordByName(loginName, password);
                Member.option();
                break;
            }
            case 4: { // logoff
                UserManager.logoff(loginName);
                start();
                break;
            }
        }
    }
}