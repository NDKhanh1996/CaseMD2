import {UserManager} from "../UserManager/UserManager";
import {ClientManager} from "../ClientManager/ClientManager";
import {start} from "../../main";
import {Refrigerator} from "./Refrigerator";

export class Admin {
    static yesNo() {
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
        const method: string[] = ['getUserList', 'getClientList', 'createAccount', 'buyClient', 'changeMoneyByName', 'setPasswordByName', 'logoffUser', 'getFoodOption', 'getOnlineTime'];
        const index = readlineSync.keyInSelect(method, 'choose what to do: ', {cancel: 'RETURN'}) + 1;
        UserManager.decreaseMoneyByTime()
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
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const ageRegex = /^(?:1[89]|[2-9]\d|[1-9]\d{2,})$/;

                console.log('Do you want enter email (y/n)? ')
                if (this.yesNo() === 'y') {
                    do {
                        var email = readlineSync.question('Enter email: ');
                        console.log(!emailRegex.test(email) ? 'Email format is not right' : 'Email input success');
                    } while (!emailRegex.test(email))
                }

                console.log('Do you want enter age (y/n)? ');
                if (this.yesNo() === 'y') {
                    do {
                        var age = readlineSync.question('Enter age: ');
                        console.log(!ageRegex.test(age) ? 'We do not accept young buffalo' : 'Age input success');
                    } while (!ageRegex.test(age))
                }

                console.log('Do you want enter address (y/n)? ');
                if (this.yesNo() === 'y'){
                    var address = readlineSync.question('Enter address: ');
                }

                console.log('Do you want enter gender (y/n)? ');
                var gender: string | undefined = undefined;
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
            case 8: { // foodOption
                Refrigerator.option();
                break;
            }
            case 9: { // getOnlineTime
                const username = readlineSync.question('Enter username: ');
                UserManager.getOnlineTimeByName(username);
                Admin.option();
                break;
            }
        }
    }
}