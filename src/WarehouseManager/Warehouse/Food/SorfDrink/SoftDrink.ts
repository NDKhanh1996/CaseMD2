import {FoodAndDrink, FoodType} from "../FoodAndDrink";
export class SoftDrink extends FoodAndDrink {
    protected color: string;

    constructor(name: string, calories: number, money: number, color: string) {
        super(name, calories, FoodType.Wet, money);
        this.color = color;
    }
}