import {User} from "./User";
import {ClientManger} from "../../ClientManager/ClientManger";

export class UserManager {
    private static list: User[] = [];

    static getList(): User[] {
        return this.list;
    }

    static nameIsExist(name: string): boolean {
        return this.list.some(user => user.getName() === name);
    }

    static createAccount(name: string, password: number, money: number) {
        if (this.nameIsExist(name)) {
            console.log(`This name "${name}" has already existed`);
        } else {
            this.list.push(new User(name, password, money));
            console.log(`An account named "${name}" has been created`);
        }
    }

    static getSize() {
        console.log(`the number of account available is: ${this.list.length}`)
        return this.list.length;
    }

    static getIndexByName(name: string): number | undefined {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].getName() === name) {
                console.log(`Account "${name}" have index: ${i}`)
                return i; // return undefined if cant found name
            }
        }
    }

    static getMoneyByName(name: string): number | undefined {
        let indexOfUser = -1;
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].getName() === name) {
                console.log(`"${name}" has a balance of ${this.list[i].getMoney()} VND`);
                indexOfUser = i;
                return this.list[i].getMoney();
                // return undefined if cant found name
            }
        }
        if (indexOfUser === -1) {
            console.log(`The name does not exist: "${name}"`);
        }
    }

    static setMoneyByName(name: string, newMoney: number): void {
        let indexOfUser = -1;
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].getName() === name) {
                this.list[i].setMoney(newMoney);
                indexOfUser = i;
            }
        }
        if (indexOfUser >= 0 && indexOfUser < this.list.length) {
            console.log(`"${name}" has had their money changed to: ${this.list[indexOfUser].getMoney()}`);
        } else {
            console.log(`The name does not exist: ${name}`);
        }
    }

    static getPasswordByName(name: string): number | undefined {
        let indexOfUser = -1
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].getName() === name) {
                console.log(`"${name}"'s password is: ${this.list[i].getPassword()}`);
                indexOfUser = i;
                return this.list[i].getPassword();
                // return undefined if cant found name
            }
        }
        if (indexOfUser === -1) {
            console.log(`The name does not exist: "${name}"`);
        }
    }

    static setPasswordByName(name: string, newPassword: number): void {
        let indexOfUser = -1;
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].getName() === name) {
                this.list[i].setPassword(newPassword);
                indexOfUser = i;
            }
        }
        if (indexOfUser >= 0 && indexOfUser < this.list.length) {
            console.log(`"${name}" has had their password changed to: ${this.list[indexOfUser].getPassword()}`);
        } else {
            console.log(`The name does not exist: ${name}`);
        }
    }

    static login(userName: string, password: number, clientName: number) {
        let userIndex = -1;
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].getName() === userName && this.list[i].getPassword() === password) {
                userIndex = i;
                break;
            }
        }
        if (userIndex !== -1) {
            let clientIndex = clientName - 1;
            if (clientIndex > -1 && clientIndex < ClientManger.getList().length - 1) {
                if (ClientManger.getList()[clientIndex].getOnUsedBy() === null) {
                    ClientManger.getList()[clientIndex].login(userName);
                    this.list[userIndex].setOnline(true);
                    console.log(`User "${userName}" has logged in successfully to client "${clientName}"`);
                } else {
                    console.log(`This client is in use`)
                }

            } else {
                console.log(`Invalid client name`);
            }
        } else {
            console.log(`Invalid user name: "${userName}" or password`);
        }
    }
}