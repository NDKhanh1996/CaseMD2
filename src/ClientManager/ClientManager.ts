import {Client} from "./Clients/Client";

export class ClientManager {
    private static list: Client[] = [];
    private static currentName: number = 1;

    static getList(): Client[] {
        return this.list;
    }

    static buyClient(numberOfClientWantToBuy: number): void {
        for (let i: number = 0; i < numberOfClientWantToBuy; i++) {
            this.list.push(new Client(this.currentName));
            console.log(`An client named "${this.currentName}" has been bought`);
            this.currentName++
        }
    }

    static getSize(): number {
        console.log(`the number of clients available is: ${this.list.length}`)
        return this.list.length;
    }

    static getIndexByName(name: number): number {
        for (let i: number = 0; i < this.list.length; i++) {
            if (this.list[i].getName() === name) {
                console.log(`Client "${name}" have index: ${i}`)
                return i;
            }
        }
        throw new Error(`Can't find client ${name}`) // --------------------------------------------------------------------------
    }
}