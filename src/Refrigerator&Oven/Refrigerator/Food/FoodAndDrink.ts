export enum FoodType {
    Wet = 'Wet',
    Dry = 'Dry'
}
export class FoodAndDrink {
    protected name: string;
    protected calories: number;
    protected type: FoodType;
    protected money: number;

    constructor(name: string, calories: number, type: FoodType, money: number) {
        this.name = name;
        this.calories = calories;
        this.type = type;
        this.money = money;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getCalories(): number {
        return this.calories;
    }

    setCalories(value: number) {
        this.calories = value;
    }

    getType(): FoodType {
        return this.type;
    }

    setType(value: FoodType) {
        this.type = value;
    }

    getMoney(): number {
        return this.money;
    }

    setMoney(value: number) {
        this.money = value;
    }
}