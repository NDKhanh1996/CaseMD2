import {User} from "./User";

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
            console.log(`this name ${name} has already existed`);
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
                console.log(`Account ${name} have index: ${i}`)
                return i; // return undefined if cant found name
            }
        }
    }

    static getMoneyByName(name: string): void {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].getName() === name) {
                console.log(`${name} have ${this.list[i].getMoney()} VND`);  // return undefined if cant found name
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
            console.log(`money of ${name} is changed to: ${this.list[indexOfUser].getMoney()}`);
        } else {
            console.log(`name ${name} is not exist`);
        }
    }

    static getPasswordByName(name: string): void {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].getName() === name) {
                console.log(`password of ${name} is: ${this.list[i].getPassword()}`) ; // return undefined if cant found name
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
            console.log(`password of ${name} is changed to: ${this.list[indexOfUser].getPassword()}`);
        } else {
            console.log(`name ${name} is not exist`);
        }
    }
}