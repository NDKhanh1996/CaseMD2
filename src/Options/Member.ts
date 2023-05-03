import {Admin} from "./Admin";
import {loginName, start} from "../../main";
import {UserManager} from "../UserManager/UserManager";
import {Oven} from "./Oven";

export class Member extends Admin {
    static option(): void {
        const readlineSync = require('readline-sync');
        const method: string[] = ['getMoney', 'getPassword', 'setPassword', 'logoff', 'foodOption'];
        const index = readlineSync.keyInSelect(method, 'choose what to do: ', {cancel: 'RETURN'}) + 1;
        switch (index) {
            case 0: { // RETURN
                UserManager.decreaseMoneyByTime()
                start();
                break;
            }
            case 1: { // getMoney
                UserManager.getMoneyByName(loginName);
                UserManager.decreaseMoneyByTime()
                Member.option();
                break;
            }
            case 2: { // getPassword
                UserManager.getPasswordByName(loginName);
                UserManager.decreaseMoneyByTime()
                Member.option();
                break;
            }
            case 3: { // setPassword
                const password = readlineSync.question('Enter password: ');
                UserManager.setPasswordByName(loginName, password);
                UserManager.decreaseMoneyByTime()
                Member.option();
                break;
            }
            case 4: { // logoff
                UserManager.logoff(loginName);
                UserManager.decreaseMoneyByTime()
                start();
                break;
            }
            case 5: { // foodOption
                UserManager.decreaseMoneyByTime()
                Oven.option();
                break;
            }
        }
    }
}