import {Client} from "./Client";

export class ClientManger {
    private static list: Client[] = [];
    private static currenName: number = 1;

    static getList(): Client[] {
        return this.list;
    }

    static buyClient() {
        this.list.push(new Client(this.currenName));
        this.currenName ++
    }

    static getSize() {
        console.log(`the number of clients available is: ${this.list.length}`)
        return this.list.length;
    }

    static getIndexByName(name: number): number | undefined {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].getName() === name) {
                console.log(`Client ${name} have index: ${i}`)
                return i; // return undefined if cant found name
            }
        }
    }
}