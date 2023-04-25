import {User} from "./User/User";
import {ClientManager} from "../ClientManager/ClientManager";
import {Client} from "../ClientManager/Clients/Client";

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
                return i; // return undefined if cant found name
            }
        }
    }

    static getMoneyByName(name: string): number | undefined {
        let i = this.getIndexByName(name);
        if (i !== undefined) {
            console.log(`"${name}" has a balance of ${this.list[i].getMoney()} VND`);
            return this.list[i].getMoney();
        } else {
            console.log(`Can't get money by the name that does not exist: "${name}"`);
        }
    }

    static setMoneyByName(name: string, newMoney: number): void {
        let i = this.getIndexByName(name);
        if (i !== undefined) {
            this.list[i].setMoney(newMoney);
            console.log(`"${name}" has had their money changed to: ${this.list[i].getMoney()}`);
        } else {
            console.log(`Can't set money by the name that does not exist: "${name}"`);
        }
    }

    static getPasswordByName(name: string): number | undefined {
        let i = this.getIndexByName(name);
        if (i !== undefined) {
            console.log(`"${name}"'s password is: ${this.list[i].getPassword()}`);
            return this.list[i].getPassword();
        } else {
            console.log(`Can't get password by the name that does not exist: "${name}"`);
        }
    }

    static setPasswordByName(name: string, newPassword: number): void {
        let i = this.getIndexByName(name);
        if (i !== undefined) {
            this.list[i].setPassword(newPassword);
            console.log(`"${name}" has had their password changed to: ${this.list[i].getPassword()}`);
        } else {
            console.log(`Can't set password by the name that does not exist: "${name}"`);
        }
    }

    static login(userName: string, password: number, clientName: number): void {
        let userIndex = this.getIndexByName(userName);
        if (userIndex !== undefined) {
            let clientIndex = clientName - 1;
            if (clientIndex > -1 && clientIndex < ClientManager.getList().length - 1) {
                if (ClientManager.getList()[clientIndex].getOnUsedBy() === null) {
                    ClientManager.getList()[clientIndex].login(userName);
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

    static logoff(userName: string) { // maybe can use link list with pc
        let userIndex = this.getIndexByName(userName);
        if (userIndex !== undefined && this.list[userIndex].getOnline() === true) {
            this.list[userIndex].setOnline(false);
            ClientManager.getList().forEach(i => {
                if (i.getOnUsedBy() === userName) {
                    i.logoff();
                    console.log(`User "${userName}" has logged off successfully to client "${i.getName()}"`);
                }
            })
        }
    }
}