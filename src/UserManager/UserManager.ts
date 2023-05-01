import {User} from "./User/User";
import {ClientManager} from "../ClientManager/ClientManager";
import {Client} from "../ClientManager/Clients/Client";
import {Admin} from "../Options/Admin";

export class UserManager {
    private static list: User[] = [];

    static getList(): User[] {

        return this.list;
    }

    static nameIsExist(name: string): boolean {
        return this.list.some(user => user.getName() === name);
    }

    static createAccount(name: string, password: string, money: number): void {
        if (this.nameIsExist(name)) {
            console.log(`This name "${name}" has already existed`);
        } else {
            this.list.push(new User(name, password, money));
            console.log(`An account named "${name}" has been created`);
        }
    }

    static getSize(): number {
        console.log(`the number of account available is: ${this.list.length}`)
        return this.list.length;
    }

    static getIndexByName(name: string): number {
        for (let i: number = 0; i < this.list.length; i++) {
            if (this.list[i].getName() === name) {
                return i;
            }
        }
            throw new Error(`Can't find ${name}`);
    }

    static getMoneyByName(name: string): number {
        let userIndex: number = this.getIndexByName(name);
        console.log(`"${name}" has a balance of ${this.list[userIndex].getMoney()} VND`);
        return this.list[userIndex].getMoney(); // maybe can use this value
    }

    static setMoneyByName(name: string, newMoney: number): void {
        let userIndex: number = this.getIndexByName(name);
        this.list[userIndex].setMoney(newMoney);
        console.log(`"${name}" has had their money changed to: ${this.list[userIndex].getMoney()}`);
    }

    static changeMoneyByName(name: string, money: number): void {
        let userIndex: number = this.getIndexByName(name);
        let newMoney: number = this.list[userIndex].getMoney() + money;
        this.setMoneyByName(name, newMoney);
    }

    static getPasswordByName(name: string): void {
        let userIndex: number = this.getIndexByName(name);
        console.log(`"${name}"'s password is: ${this.list[userIndex].getPassword()}`);
    }

    static setPasswordByName(name: string, newPassword: string): void {
        let i: number = this.getIndexByName(name);
        this.list[i].setPassword(newPassword);
        console.log(`"${name}" has had their password changed to: ${this.list[i].getPassword()}`);
    }

    static login(userName: string, password: string, clientName: number): boolean {
        let userIndex: number = this.getIndexByName(userName);
        let user: User = this.getList()[userIndex];
        let clientIndex: number = ClientManager.getIndexByName(clientName);
        let client: Client = ClientManager.getList()[clientIndex];
        if (password === user.getPassword() && !user.getOnline() && client.getOnUsedBy() === null) {
            client.login(userName);
            user.setOnline(true);
            console.log(`User "${userName}" has logged in successfully to client "${clientName}"`);
            return true;
        } else {
            throw new Error(`Invalid login information or client is in use`);
        }
    }

    static logoff(userName: string): void {
        let userIndex: number = this.getIndexByName(userName);
        if (this.list[userIndex].getOnline()) {
            this.list[userIndex].setOnline(false);
            ClientManager.getList().forEach(i => {
                if (i.getOnUsedBy() === userName) {
                    i.turnoff();
                    console.log(`User "${userName}" has logged off successfully to client "${i.getName()}"`);
                }
            })
        }
    }
}