import {FoodAndDrink, FoodType} from "../FoodAndDrink";

export class FriedNoodles extends FoodAndDrink {

    constructor() {
        super('Fried noodle', 500, FoodType.Dry, 35000);
    }
}