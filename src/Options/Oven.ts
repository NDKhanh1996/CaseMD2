import {OvenManager} from "../Refrigerator&Oven/OvenManager";
import {Member} from "./Member";

enum CaseNameOven {
    return,
    buyChickenNoodle,
    buyFriedNoodle,
    buyFriedRiceWithBeefAndPickles,
    buyMixedFriedRice,
    buyCoca,
    buyStingRed,
    buyStingYellow,
    getFoodList
}

export class Oven {
    static option(): void {
        const readlineSync = require('readline-sync');
        const method: string[] = ['buyChickenNoodle', 'buyFriedNoodle', 'buyFriedRiceWithBeefAndPickles', 'buyMixedFriedRice', 'buyCoca', 'buyStingRed', 'buyStingYellow', 'getFoodList'];
        const index = readlineSync.keyInSelect(method, 'choose what to do: ', {cancel: 'RETURN'}) + 1;
        switch (index) {
            case CaseNameOven.return: // case 0
                Member.option();
                break;
            case CaseNameOven.buyChickenNoodle: { // case 1
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                OvenManager.buyFood(numberWantToBuy, 'chickenNoodle');
                Oven.option();
                break;
            }
            case CaseNameOven.buyFriedNoodle: { // case 2
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                OvenManager.buyFood(numberWantToBuy, 'friedNoodle');
                Oven.option();
                break;
            }
            case CaseNameOven.buyFriedRiceWithBeefAndPickles: { // case 3
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                OvenManager.buyFood(numberWantToBuy, 'friedRiceWithBeefAndPickles');
                Oven.option();
                break;
            }
            case CaseNameOven.buyMixedFriedRice: { // case 4
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                OvenManager.buyFood(numberWantToBuy, 'mixedFriedRice');
                Oven.option();
                break;
            }
            case CaseNameOven.buyCoca: { // case 5
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                OvenManager.buyFood(numberWantToBuy, 'coca');
                Oven.option();
                break;
            }
            case CaseNameOven.buyStingRed: { // case 6
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                OvenManager.buyFood(numberWantToBuy, 'stingRed');
                Oven.option();
                break;
            }
            case CaseNameOven.buyStingYellow: { // case 7
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                OvenManager.buyFood(numberWantToBuy, 'stingYellow');
                Oven.option();
                break;
            }
            case CaseNameOven.getFoodList: { // case 8
                OvenManager.getList();
                Oven.option();
                break;
            }
        }
    }
}