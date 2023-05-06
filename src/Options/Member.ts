import {Admin} from "./Admin";
import {loginName, start} from "../../main";
import {UserManager} from "../UserManager/UserManager";
import {Oven} from "./Oven";

export class Member extends Admin {
    static option(): void {
        const readlineSync = require('readline-sync');
        const method: string[] = ['getMoney', 'getPassword', 'setPassword', 'logoff', 'foodOption'];
        const index = readlineSync.keyInSelect(method, 'choose what to do: ', {cancel: 'RETURN'}) + 1;
        UserManager.decreaseMoneyByTime();
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
            case 5: { // foodOption
                Oven.option();
                break;
            }
        }
    }
}