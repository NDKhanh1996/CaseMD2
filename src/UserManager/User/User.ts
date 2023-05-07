export class User {
    private readonly name: string;
    private password: string;
    private money: number;
    private online: boolean = false;
    private startTime: number = 0;
    private email: string | undefined;
    private age: number | undefined;
    private address: string | undefined;
    private gender: string | undefined;

    constructor(name: string, password: string, money: number, email?: string, age?: number, address?: string, gender?: string) {
        this.name = name;
        this.password = password;
        this.money = money;
        this.email = email || undefined;
        this.age = age || undefined;
        this.address = address || undefined;
        this.gender = gender || undefined;
    }

    getOnline(): boolean {
        return this.online;
    }

    setOnline(value: boolean): void {
        this.online = value;
        if (value) {
            this.startTime = Date.now();
        }
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

    getOnlineTime(): number {
        if (this.online) {
            const currentTime: number = Date.now();
            return (currentTime - this.startTime) / 1000; // return time used (second)
        } else {
            return 0;
        }
    }

    decreaseMoneyByTime(): void {
        this.money -= this.getOnlineTime() * 10000 / 3600 // about 166 money per sec
    }
}