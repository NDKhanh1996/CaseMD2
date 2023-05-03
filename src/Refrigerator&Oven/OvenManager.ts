import {RefrigeratorManager} from "./RefrigeratorManager";
import {ChickenNoodles} from "./Refrigerator/Food/Noodle/ChickenNoodles";

export class OvenManager extends RefrigeratorManager { // have to create multiple methods so no need to enter arguments
    static buyChickenNoodle(numberWantToBuy: number) {
        if (this.chickenNoodleList.length >= numberWantToBuy) {
            this.chickenNoodleList.splice(-numberWantToBuy);
        } else {
            console.log('The remaining fried noodles are not enough')
        }
    }

    static buyFriedNoodle(numberWantToBuy: number) {
        if (this.friedNoodleList.length >= numberWantToBuy) {
            this.friedNoodleList.splice(-numberWantToBuy);
        } else {
            console.log('The remaining fried noodles are not enough')
        }
    }

    static buyFriedRiceWithBeefAndPickles(numberWantToBuy: number) {
        if (this.friedRiceWithBeefAndPicklesList.length >= numberWantToBuy) {
            this.friedRiceWithBeefAndPicklesList.splice(-numberWantToBuy);
        } else {
            console.log('The remaining fried rice with beef and pickles are not enough')
        }
    }

    static buyMixedFriedRice(numberWantToBuy: number) {
        if (this.mixedFriedRiceList.length >= numberWantToBuy) {
            this.mixedFriedRiceList.splice(-numberWantToBuy);
        } else {
            console.log('The remaining mixed fried rice are not enough')
        }
    }

    static buyCoca(numberWantToBuy: number) {
        if (this.cocaList.length >= numberWantToBuy) {
            this.cocaList.splice(-numberWantToBuy);
        } else {
            console.log('The remaining coca are not enough')
        }
    }

    static buyStingRed(numberWantToBuy: number) {
        if (this.stingRedList.length >= numberWantToBuy) {
            this.stingRedList.splice(-numberWantToBuy);
        } else {
            console.log('The remaining sting red are not enough')
        }
    }

    static buyStingYellow(numberWantToBuy: number) {
        if (this.stingYellowList.length >= numberWantToBuy) {
            this.stingYellowList.splice(-numberWantToBuy);
        } else {
            console.log('The remaining sting yellow are not enough')
        }
    }
}