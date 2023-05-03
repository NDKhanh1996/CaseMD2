import {OvenManager} from "../Refrigerator&Oven/OvenManager";
import {Member} from "./Member";

export class Oven {
    static option(): void {
        const readlineSync = require('readline-sync');
        const method: string[] = ['buyChickenNoodle', 'buyFriedNoodle', 'buyFriedRiceWithBeefAndPickles', 'buyMixedFriedRice', 'buyCoca', 'buyStingRed', 'buyStingYellow', 'getFoodList'];
        const index = readlineSync.keyInSelect(method, 'choose what to do: ', {cancel: 'RETURN'}) + 1;
        switch (index) {
            case 0:
                Member.option();
                break;
            case 1: { // buyChickenNoodle
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                OvenManager.buyChickenNoodle(numberWantToBuy);
                Oven.option();
                break;
            }
            case 2: { // buyFriedNoodle
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                OvenManager.buyFriedNoodle(numberWantToBuy);
                Oven.option();
                break;
            }
            case 3: { // buyFriedRiceWithBeefAndPickles
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                OvenManager.buyFriedRiceWithBeefAndPickles(numberWantToBuy);
                Oven.option();
                break;
            }
            case 4: { // buyMixedFriedRice
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                OvenManager.buyMixedFriedRice(numberWantToBuy);
                Oven.option();
                break;
            }
            case 5: { // buyCoca
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                OvenManager.buyCoca(numberWantToBuy);
                Oven.option();
                break;
            }
            case 6: { // buyStingRed
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                OvenManager.buyStingRed(numberWantToBuy);
                Oven.option();
                break;
            }
            case 7: { // buyStingYellow
                const numberWantToBuy = +readlineSync.question('Enter number want to buy: ');
                OvenManager.buyStingYellow(numberWantToBuy);
                Oven.option();
                break;
            }
            case 8: { // getFoodList
                OvenManager.getList();
                Oven.option();
                break;
            }
        }
    }
}