import {FoodAndDrink, FoodType} from "../FoodAndDrink";

export class FriedRiceWithBeefAndPickles extends FoodAndDrink {

    constructor() {
        super('Fried rice with beef and pickles', 500, FoodType.Dry, 40000);
    }
}