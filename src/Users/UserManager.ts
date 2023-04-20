import {User} from "./User";
import {ClientManger} from "../Clients/ClientManger";

export class UserManager {
    private static list: User[] = [];
    private static nameExist: string[] = [];

    static getList(): User[] {
        return this.list;
    }

    static nameIsExist(name: string): boolean {
        return this.nameExist.indexOf(name) !== -1;
    }

    static createAccount(name: string, password: number, money: number) {
        if (this.nameIsExist(name)) {
            console.log(`this name "${name}" has already existed`);
        } else {
            this.nameExist.push(name);
            this.list.push(new User(name, password, money));
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

    static getMoneyByName(name: string): void {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].getName() === name) {
                console.log(`"${name}" has a balance of ${this.list[i].getMoney()} VND`);  // return undefined if cant found name
            }
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
            console.log(`"${name}" has had their money changed to:: ${this.list[indexOfUser].getMoney()}`);
        } else {
            console.log(`The name does not exist: ${name}`);
        }
    }

    static getPasswordByName(name: string): void {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].getName() === name) {
                console.log(`"${name}"'s password is: ${this.list[i].getPassword()}`) ; // return undefined if cant found name
            }
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
            let clientIndex = -1;
            for (let i = 0; i < ClientManger.getList().length; i++) {
                if (ClientManger.getList()[i].getName() === clientName) {
                    clientIndex = i;
                    break;
                }
            }
            if (clientIndex !== -1) {
                ClientManger.getList()[clientIndex].login(userName);
                this.list[userIndex].setOnline(true);
                console.log(`User "${userName}" has logged in successfully to client "${clientName}"`);
            } else {
                console.log(`Invalid client name`);
            }
        } else {
            console.log(`Invalid user name or password`);
        }
    }
}