import {RefrigeratorManager} from "../WarehouseManager/RefrigeratorManager";
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
                RefrigeratorManager.buyChickenNoodle(numberWantToBuy);
                Refrigerator.option();
                break;
            }
            case 2: { // buyFriedNoodle
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                RefrigeratorManager.buyFriedNoodle(numberWantToBuy);
                Refrigerator.option();
                break;
            }
            case 3: { // buyFriedRiceWithBeefAndPickles
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                RefrigeratorManager.buyFriedRiceWithBeefAndPickles(numberWantToBuy);
                Refrigerator.option();
                break;
            }
            case 4: { // buyMixedFriedRice
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                RefrigeratorManager.buyMixedFriedRice(numberWantToBuy);
                Refrigerator.option();
                break;
            }
            case 5: { // buyCoca
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                RefrigeratorManager.buyCoca(numberWantToBuy);
                Refrigerator.option();
                break;
            }
            case 6: { // buyStingRed
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                RefrigeratorManager.buyStingRed(numberWantToBuy);
                Refrigerator.option();
                break;
            }
            case 7: { // buyStingYellow
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                RefrigeratorManager.buyStingYellow(numberWantToBuy);
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