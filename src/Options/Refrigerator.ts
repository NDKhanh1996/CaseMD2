import {RefrigeratorManager} from "../Refrigerator&Oven/RefrigeratorManager";
import {Admin} from "./Admin";

enum CaseNameRefrigerator {
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

export class Refrigerator {
    static option(): void {
        const readlineSync = require('readline-sync');
        const method: string[] = ['buyChickenNoodle', 'buyFriedNoodle', 'buyFriedRiceWithBeefAndPickles', 'buyMixedFriedRice', 'buyCoca', 'buyStingRed', 'buyStingYellow', 'getFoodList'];
        const index = readlineSync.keyInSelect(method, 'choose what to do: ', {cancel: 'RETURN'}) + 1;
        switch (index) {
            case CaseNameRefrigerator.return:
                Admin.option();
                break;
            case CaseNameRefrigerator.buyChickenNoodle: {
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                RefrigeratorManager.buyFood(numberWantToBuy, 'chickenNoodle');
                Refrigerator.option();
                break;
            }
            case CaseNameRefrigerator.buyFriedNoodle: {
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                RefrigeratorManager.buyFood(numberWantToBuy, 'friedNoodle');
                Refrigerator.option();
                break;
            }
            case CaseNameRefrigerator.buyFriedRiceWithBeefAndPickles: {
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                RefrigeratorManager.buyFood(numberWantToBuy, 'friedRiceWithBeefAndPickles');
                Refrigerator.option();
                break;
            }
            case CaseNameRefrigerator.buyMixedFriedRice: {
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                RefrigeratorManager.buyFood(numberWantToBuy, 'mixedFriedRice');
                Refrigerator.option();
                break;
            }
            case CaseNameRefrigerator.buyCoca: {
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                RefrigeratorManager.buyFood(numberWantToBuy, 'coca');
                Refrigerator.option();
                break;
            }
            case CaseNameRefrigerator.buyStingRed: {
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                RefrigeratorManager.buyFood(numberWantToBuy, 'stingRed');
                Refrigerator.option();
                break;
            }
            case CaseNameRefrigerator.buyStingYellow: {
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                RefrigeratorManager.buyFood(numberWantToBuy, 'stingYellow');
                Refrigerator.option();
                break;
            }
            case CaseNameRefrigerator.getFoodList: {
                RefrigeratorManager.getList();
                Refrigerator.option();
                break;
            }
        }
    }
}