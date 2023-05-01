export class User {
    private readonly name: string;
    private password: string;
    private money: number;
    private online: boolean = false;

    private startTime: number = 0;

    constructor(name: string, password: string, money: number) {
        this.name = name;
        this.password = password;
        this.money = money;
    }

    getOnline(): boolean {
        return this.online;
    }


    getOnlineTime(): number {
        if (this.online) {
            const currentTime: number = Date.now();
            const timeElapsed: number = Math.floor((currentTime - this.startTime) / 1000);
            console.log(`User is online for ${timeElapsed} seconds.`);
            return timeElapsed;
        } else {
            console.log(`User is offline.`);
            return 0;
        }
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
    decreaseMoney(){
        this.money -= this.getOnlineTime() * 10000 / 60
    }
}