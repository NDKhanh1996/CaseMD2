export class User {
    private readonly name: string;
    private password: string;
    private money: number;
    private online: boolean = false;

    constructor(name: string, password: string, money: number) {
        this.name = name;
        this.password = password;
        this.money = money;
    }

    getOnline(): boolean {
        return this.online;
    }

    setOnline(value: boolean): void {
        this.online = value;
    }

    getName(): string {
        return this.name;
    }

    getPassword(): string {
        return this.password;
    }

    getMoney(): number {
        return this.money;
    }

    setPassword(value: string): void {
        this.password = value;
    }

    setMoney(value: number): void {
        this.money = value;
    }
}