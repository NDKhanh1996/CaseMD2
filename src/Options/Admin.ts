import {UserManager} from "../UserManager/UserManager";
import {ClientManager} from "../ClientManager/ClientManager";
import {start} from "../../main";
import {Refrigerator} from "./Refrigerator";

export class Admin {
    static option(): void {
        const readlineSync = require('readline-sync');
        const method: string[] = ['getUserList', 'getClientList', 'createAccount', 'buyClient', 'changeMoneyByName', 'setPasswordByName', 'logoffUser', 'getFoodOption', 'getOnlineTime'];
        const index = readlineSync.keyInSelect(method, 'choose what to do: ', {cancel: 'RETURN'}) + 1;
        switch (index) {
            case 0: // Return
                UserManager.decreaseMoneyByTime()
                start();
                break;
            case 1: // getUserList
                console.table(UserManager.getList());
                UserManager.decreaseMoneyByTime()
                Admin.option();
                break;
            case 2: // getClientList
                console.table(ClientManager.getList());
                UserManager.decreaseMoneyByTime()
                Admin.option();
                break;
            case 3: { // createAccount
                const username = readlineSync.question('Enter username: ');
                const password = readlineSync.question('Enter password: ');
                const money: number = +readlineSync.question('Enter money: ');

                const enterEmail = readlineSync.question('Do you want enter email (y/n)? ');
                if (enterEmail === 'y') {
                    var email = readlineSync.question('Enter email: ');
                }

                const enterAge = readlineSync.question('Do you want enter age (y/n)? ');
                if (enterAge === 'y') {
                    var age = readlineSync.question('Enter age: ');
                }

                const enterAddress = readlineSync.question('Do you want enter address (y/n)? ');
                if (enterAddress === 'y') {
                    var address = readlineSync.question('Enter address: ');
                }

                const enterGender = readlineSync.question('Do you want enter gender (y/n)? ');
                if (enterGender === 'y') {
                    var gender = readlineSync.question('Enter gender ');
                }

                UserManager.createAccount(username, password, money, email, age, address, gender);
                UserManager.decreaseMoneyByTime()
                Admin.option();
                break;
            }
            case 4: { // buy pc
                const numberOfClientWantToBuy: number = +readlineSync.question('Enter number of client you want: ');
                ClientManager.buyClient(numberOfClientWantToBuy);
                UserManager.decreaseMoneyByTime()
                Admin.option();
                break;
            }

            case 5: { // changeMoneyByName
                const username = readlineSync.question('Enter username: ');
                const money: number = +readlineSync.question('Enter newMoney: ');
                UserManager.changeMoneyByName(username, money);
                UserManager.decreaseMoneyByTime()
                Admin.option();
                break;
            }

            case 6: { // setPasswordByName
                const username = readlineSync.question('Enter username: ');
                const password = readlineSync.question('Enter password: ');
                UserManager.setPasswordByName(username, password);
                UserManager.decreaseMoneyByTime()
                Admin.option();
                break;
            }
            case 7: { // logoffUser
                const username = readlineSync.question('Enter username: ');
                UserManager.logoff(username);
                UserManager.decreaseMoneyByTime()
                Admin.option();
                break;
            }
            case 8: { // foodOption
                UserManager.decreaseMoneyByTime()
                Refrigerator.option();
                break;
            }
            case 9: { // getOnlineTime
                const username = readlineSync.question('Enter username: ');
                UserManager.getOnlineTimeByName(username);
                UserManager.decreaseMoneyByTime()
                Admin.option();
                break;
            }
        }
    }
}