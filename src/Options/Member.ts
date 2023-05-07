import {Admin} from "./Admin";
import {loginName, start} from "../../main";
import {UserManager} from "../UserManager/UserManager";
import {Oven} from "./Oven";

enum CaseNameMember {
    Return,
    getMoney,
    getPassword,
    setPassword,
    logoff,
    foodOption
}

export class Member extends Admin {
    static option(): void {
        const readlineSync = require('readline-sync');
        const method: string[] = ['getMoney', 'getPassword', 'setPassword', 'logoff', 'foodOption'];
        const index = readlineSync.keyInSelect(method, 'choose what to do: ', {cancel: 'RETURN'}) + 1;
        UserManager.decreaseMoneyByTime();
        switch (index) {
            case CaseNameMember.Return: { // case 1
                start();
                break;
            }
            case CaseNameMember.getMoney: { // case 2
                UserManager.getMoneyByName(loginName);
                Member.option();
                break;
            }
            case CaseNameMember.getPassword: { // case 3
                UserManager.getPasswordByName(loginName);
                Member.option();
                break;
            }
            case CaseNameMember.setPassword: { // case 4
                const password = readlineSync.question('Enter password: ');
                UserManager.setPasswordByName(loginName, password);
                Member.option();
                break;
            }
            case CaseNameMember.logoff: { // case 5
                UserManager.logoff(loginName);
                start();
                break;
            }
            case CaseNameMember.foodOption: { // case 6
                Oven.option();
                break;
            }
        }
    }
}