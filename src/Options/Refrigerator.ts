import {RefrigeratorManager} from "../Refrigerator&Oven/RefrigeratorManager";
import {Admin} from "./Admin";

export class Refrigerator {
    static option(): void {
        const readlineSync = require('readline-sync');
        const method: string[] = ['buyChickenNoodle', 'buyFriedNoodle', 'buyFriedRiceWithBeefAndPickles', 'buyMixedFriedRice', 'buyCoca', 'buyStingRed', 'buyStingYellow', 'getFoodList'];
        const index = readlineSync.keyInSelect(method, 'choose what to do: ', {cancel: 'RETURN'}) + 1;
        switch (index) {
            case 0:
                Admin.option();
                break;
            case 1: { // buyChickenNoodle
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                RefrigeratorManager.buyFood(numberWantToBuy, 'chickenNoodle');
                Refrigerator.option();
                break;
            }
            case 2: { // buyFriedNoodle
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                RefrigeratorManager.buyFood(numberWantToBuy, 'friedNoodle');
                Refrigerator.option();
                break;
            }
            case 3: { // buyFriedRiceWithBeefAndPickles
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                RefrigeratorManager.buyFood(numberWantToBuy, 'friedRiceWithBeefAndPickles');
                Refrigerator.option();
                break;
            }
            case 4: { // buyMixedFriedRice
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                RefrigeratorManager.buyFood(numberWantToBuy, 'mixedFriedRice');
                Refrigerator.option();
                break;
            }
            case 5: { // buyCoca
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                RefrigeratorManager.buyFood(numberWantToBuy, 'coca');
                Refrigerator.option();
                break;
            }
            case 6: { // buyStingRed
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                RefrigeratorManager.buyFood(numberWantToBuy, 'stingRed');
                Refrigerator.option();
                break;
            }
            case 7: { // buyStingYellow
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                RefrigeratorManager.buyFood(numberWantToBuy, 'stingYellow');
                Refrigerator.option();
                break;
            }
            case 8: { // getFoodList
                RefrigeratorManager.getList();
                Refrigerator.option();
                break;
            }
        }
    }
}