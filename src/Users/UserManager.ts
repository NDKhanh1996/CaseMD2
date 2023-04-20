import {User} from "./User";

export class UserManager {
    userList: User[];
    nameExist: string[] = [];

    constructor() {
        this.userList = [];
    }

    nameIsExist(name: string): boolean {
        return this.nameExist.indexOf(name) !== -1
    }

    createAccount(name: string, password: number, money: number) {
        if (this.nameIsExist(name)) {
            console.log(`this name ${name} has already existed`)
        } else {
            let i = new User(name, password, money)
            this.nameExist.push(name)
            this.userList.push(i)
        }
    }

    getSize() {
        return this.userList.length
    }

    getIndexByName(name: string): number | undefined {
        for (let i = 0; i < this.userList.length; i++) {
            if (this.userList[i].getName() === name) {
                return i // return undefined if cant found name
            }
        }
    }

    getMoneyByName(name: string): void {
        for (let i = 0; i < this.userList.length; i++) {
            if (this.userList[i].getName() === name) {
                console.log(`${name} have ${this.userList[i].getMoney()} VND`)  // return undefined if cant found name
            }
        }
    }

    setMoneyByName(name: string, newMoney: number): void {
        let indexOfUser = -1
        for (let i = 0; i < this.userList.length; i++) {
            if (this.userList[i].getName() === name) {
                this.userList[i].setMoney(newMoney)
                indexOfUser = i
            }
        }
        if (indexOfUser >= 0 && indexOfUser < this.userList.length) {
            console.log(`money of ${name} is changed to: ${this.userList[indexOfUser].getMoney()}`)
        } else {
            console.log(`name ${name} is not exist`)
        }
    }

    getPasswordByName(name: string): void {
        for (let i = 0; i < this.userList.length; i++) {
            if (this.userList[i].getName() === name) {
                console.log(`password of ${name} is: ${this.userList[i].getPassword()}`)  // return undefined if cant found name
            }
        }
    }

    setPasswordByName(name: string, newPassword: number): void {
        let indexOfUser = -1
        for (let i = 0; i < this.userList.length; i++) {
            if (this.userList[i].getName() === name) {
                this.userList[i].setPassword(newPassword)
                indexOfUser = i
            }
        }
        if (indexOfUser >= 0 && indexOfUser < this.userList.length) {
            console.log(`password of ${name} is changed to: ${this.userList[indexOfUser].getPassword()}`)
        } else {
            console.log(`name ${name} is not exist`)
        }
    }
}