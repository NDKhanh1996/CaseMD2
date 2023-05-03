import {FoodAndDrink, FoodType} from "../FoodAndDrink";

export class ChickenNoodles extends FoodAndDrink {

    constructor() {
        super('Chicken noodle', 457, FoodType.Wet, 30000);
    }
}