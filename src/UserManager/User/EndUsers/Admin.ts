import {UserManager} from "../../UserManager";
import {ClientManager} from "../../../ClientManager/ClientManager";
import {start} from "../../../../exe";

export class Admin {
    static logged() {
        const readlineSync = require('readline-sync');
        const method = ['getUserList', 'getClientList', 'createAccount', 'getMoneyByName', 'setMoneyByName', 'getPasswordByName', 'setPasswordByName']

        const index = readlineSync.keyInSelect(method, 'choose what to do: ', {cancel: 'RETURN'}) + 1;
        switch (index) {
            case 0:
                start();
                break;
            case 1:
                console.table(UserManager.getList());
                Admin.logged();
                break;
            case 2:
                console.table(ClientManager.getList());
                Admin.logged();
                break;
            case 3:
                UserManager.createAccount('name', 1, 1);
                Admin.logged();
                break;
            case 4:
                UserManager.getMoneyByName('a');
                Admin.logged();
                break;
            case 5:
                UserManager.setMoneyByName('a', 1);
                Admin.logged();
                break;
            case 6:
                UserManager.getPasswordByName('a');
                Admin.logged();
                break;
            case 7:
                UserManager.setPasswordByName('a', 1);
                Admin.logged();
                break;
        }
    }
}