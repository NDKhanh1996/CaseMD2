import {User} from "./User/User";
import {ClientManager} from "../ClientManager/ClientManager";
import {Client} from "../ClientManager/Clients/Client";

export class UserManager {
    private static list: User[] = [];

    static getList(): User[] {
        return this.list;
    }

    static decreaseMoneyByTime(): void {
        this.list.forEach(user => {
            user.decreaseMoneyByTime()
        })
    }

    static nameIsExist(name: string): boolean {
        return this.list.some(user => user.getName() === name);
    }

    static createAccount(name: string, password: string, money: number, email?: string, age?: number, address?: string, gender?: string): void {
        this.nameIsExist(name)
            ? console.log(`This name "${name}" has already existed`)
            : (this.list.push(new User(name, password, money, email, age, address, gender)),
                console.log(`An account named "${name}" has been created`));
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
        throw new Error(`Can't find ${name} (UserManager.getIndexByName)`); // -------------------------------------------------------------------------------------------------
    }

    static getMoneyByName(name: string): number {
        let userIndex: number = this.getIndexByName(name);
        console.log(`"${name}" has a balance of ${this.list[userIndex].getMoney().toLocaleString()} VND`);
        return this.list[userIndex].getMoney();
    }

    static setMoneyByName(name: string, newMoney: number): void {
        let userIndex: number = this.getIndexByName(name);
        this.list[userIndex].setMoney(newMoney);
        console.log(`"${name}" has had their money changed to: ${this.list[userIndex].getMoney().toLocaleString()}`);
    }

    static addMoneyByName(name: string, money: number): void {
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

    static login(userName: string, password: string, clientName: number): boolean | undefined{
        let userIndex: number = this.getIndexByName(userName);
        let user: User = this.getList()[userIndex];
        let clientIndex: number = ClientManager.getIndexByName(clientName);
        let client: Client = ClientManager.getList()[clientIndex];
        if (password === user.getPassword() && !user.getOnline() && client.getOnUsedBy() === null) {
            client.login(userName);
            user.setOnline(true);
            console.log(`User "${userName}" has logged in successfully to client "${clientName}"`);
            return true;
        } else if (password !== user.getPassword()) {
            console.log(`Invalid password (from UserManager.login)`);
        } else if (user.getOnline()) {
            console.log(`This account is on used (from UserManager.login)`);
        } else {
            console.log(`This client is on used (from UserManager.login)`);
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
        } // no need else because user need login to choose logoff
    }

    static getOnlineTimeByName(name: string): number {
        let userIndex: number = this.getIndexByName(name);
        console.log(`"${name}"'s online time is: ${this.list[userIndex].getOnlineTime()} second`);
        return this.list[userIndex].getOnlineTime()
    }

    static decreaseMoneyByOder(name: string, money: number): void {
        money *= -1
        this.addMoneyByName(name, money);
    }
}