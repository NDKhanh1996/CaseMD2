export class User {
    private readonly _name: string;
    private _password: number;
    private _money: number;

    constructor(name: string, password: number, money: number) {
        this._name = name;
        this._password = password;
        this._money = money;
    }

    getName(): string {
        return this._name;
    }

    getPassword(): number {
        return this._password;
    }

    getMoney(): number {
        return this._money;
    }

    setPassword(value: number) {
        this._password = value;
    }

    setMoney(value: number) {
        this._money = value;
    }
}