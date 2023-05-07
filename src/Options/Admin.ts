import {UserManager} from "../UserManager/UserManager";
import {ClientManager} from "../ClientManager/ClientManager";
import {start} from "../../main";
import {Refrigerator} from "./Refrigerator";

enum CaseNameAdmin {
    return,
    getUserList,
    getClientList,
    createAccount,
    buyClient,
    addMoneyByName,
    setPasswordByName,
    logoffUser,
    getFoodOption,
    getOnlineTime
}

export class Admin {
    static yesNo(): string {
        const readlineSync = require('readline-sync');
        const yesNoOption: string[] = ['Yes', 'No'];
        const index = readlineSync.keyInSelect(yesNoOption, 'choose what to do: ', {cancel: false}) + 1;
        switch (index) {
            case 1:
                return 'y';
            case 2:
                return 'n';
            default:
                return 'Error in Admin.yesNo - switch.default';
        }
    }

    static option(): void {
        const readlineSync = require('readline-sync');
        const method: string[] = ['getUserList', 'getClientList', 'createAccount', 'buyClient', 'addMoneyByName', 'setPasswordByName', 'logoffUser', 'getFoodOption', 'getOnlineTime'];
        const index = readlineSync.keyInSelect(method, 'choose what to do: ', {cancel: 'RETURN'}) + 1;
        UserManager.decreaseMoneyByTime();
        switch (index) {
            case CaseNameAdmin.return: // case 0
                start();
                break;
            case CaseNameAdmin.getUserList: // case 1
                console.table(UserManager.getList());
                Admin.option();
                break;
            case CaseNameAdmin.getClientList: // case 2
                console.table(ClientManager.getList());
                Admin.option();
                break;
            case CaseNameAdmin.createAccount: { // case 3
                const username = readlineSync.question('Enter username: ');
                const password = readlineSync.question('Enter password: ');
                const money: number = +readlineSync.question('Enter money: ');

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                let email: string = '';
                console.log('Do you want enter email (y/n)? ');
                if (this.yesNo() === 'y') {
                    do {
                        email = readlineSync.question('Enter email: ');
                        console.log(!emailRegex.test(email) ? 'Email format is not right' : 'Email input success');
                    } while (!emailRegex.test(email));
                }

                let age: number | undefined;
                console.log('Do you want enter age (y/n)? ');
                if (this.yesNo() === 'y') {
                    do {
                        age = +readlineSync.question('Enter age: ');
                        console.log(age < 18 ? 'We do not accept young buffalo' : 'Age input success');
                    } while (age < 18);
                }

                let address: string | undefined;
                console.log('Do you want enter address (y/n)? ');
                if (this.yesNo() === 'y') {
                    address = readlineSync.question('Enter address: ');
                }

                let gender: string | undefined;
                console.log('Do you want enter gender (y/n)? ');
                if (this.yesNo() === 'y') {
                    const genderOption: string[] = ['Male', 'Female', 'LB-GT'];
                    const index = readlineSync.keyInSelect(genderOption, 'choose what to do: ', {cancel: false}) + 1;
                    switch (index) {
                        case 1:
                            gender = 'Male';
                            break;
                        case 2:
                            gender = 'Female';
                            break;
                        case 3:
                            gender = 'LB-GT'
                            break;
                    }
                }
                UserManager.createAccount(username, password, money, email, age, address, gender);
                Admin.option();
                break;
            }
            case CaseNameAdmin.buyClient: { // case 4
                const numberOfClientWantToBuy: number = +readlineSync.question('Enter number of client you want: ');
                ClientManager.buyClient(numberOfClientWantToBuy);
                Admin.option();
                break;
            }

            case CaseNameAdmin.addMoneyByName: { // case 5
                const username = readlineSync.question('Enter username: ');
                const money: number = +readlineSync.question('Enter money you want to add: ');
                UserManager.addMoneyByName(username, money);
                Admin.option();
                break;
            }

            case CaseNameAdmin.setPasswordByName: { // case 6
                const username = readlineSync.question('Enter username: ');
                const password = readlineSync.question('Enter password: ');
                UserManager.setPasswordByName(username, password);
                Admin.option();
                break;
            }
            case CaseNameAdmin.logoffUser: { // case 7
                const username = readlineSync.question('Enter username: ');
                UserManager.logoff(username);
                Admin.option();
                break;
            }
            case CaseNameAdmin.getFoodOption: { // case 8
                Refrigerator.option();
                break;
            }
            case CaseNameAdmin.getOnlineTime: { // case 9
                const username = readlineSync.question('Enter username: ');
                UserManager.getOnlineTimeByName(username);
                Admin.option();
                break;
            }
        }
    }
}