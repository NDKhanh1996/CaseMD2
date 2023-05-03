import {FoodAndDrink, FoodType} from "../FoodAndDrink";

export class MixedFriedRice extends FoodAndDrink {

    constructor() {
        super('Mixed fried rice', 300, FoodType.Dry, 35000);
    }
}