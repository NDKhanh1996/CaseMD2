import {RefrigeratorManager} from "./RefrigeratorManager";
import {UserManager} from "../UserManager/UserManager";
import {loginName} from "../../main";

export class OvenManager extends RefrigeratorManager { // have to create multiple methods so no need to enter arguments
    static buyChickenNoodle(numberWantToBuy: number) {
        if (this.chickenNoodleList.length >= numberWantToBuy) {
            const totalMoney = RefrigeratorManager.chickenNoodleList[0].getMoney() * numberWantToBuy;
            UserManager.decreaseMoneyByOder(loginName, totalMoney);
            this.chickenNoodleList.splice(-numberWantToBuy);
        } else {
            console.log('The remaining fried noodles are not enough')
        }
    }

    static buyFriedNoodle(numberWantToBuy: number) {
        if (this.friedNoodleList.length >= numberWantToBuy) {
            const totalMoney = RefrigeratorManager.friedNoodleList[0].getMoney() * numberWantToBuy;
            UserManager.decreaseMoneyByOder(loginName, totalMoney);
            this.friedNoodleList.splice(-numberWantToBuy);
        } else {
            console.log('The remaining fried noodles are not enough')
        }
    }

    static buyFriedRiceWithBeefAndPickles(numberWantToBuy: number) {
        if (this.friedRiceWithBeefAndPicklesList.length >= numberWantToBuy) {
            const totalMoney = RefrigeratorManager.friedRiceWithBeefAndPicklesList[0].getMoney() * numberWantToBuy;
            UserManager.decreaseMoneyByOder(loginName, totalMoney);
            this.friedRiceWithBeefAndPicklesList.splice(-numberWantToBuy);
        } else {
            console.log('The remaining fried rice with beef and pickles are not enough')
        }
    }

    static buyMixedFriedRice(numberWantToBuy: number) {
        if (this.mixedFriedRiceList.length >= numberWantToBuy) {
            const totalMoney = RefrigeratorManager.mixedFriedRiceList[0].getMoney() * numberWantToBuy;
            UserManager.decreaseMoneyByOder(loginName, totalMoney);
            this.mixedFriedRiceList.splice(-numberWantToBuy);
        } else {
            console.log('The remaining mixed fried rice are not enough')
        }
    }

    static buyCoca(numberWantToBuy: number) {
        if (this.cocaList.length >= numberWantToBuy) {
            const totalMoney = RefrigeratorManager.cocaList[0].getMoney() * numberWantToBuy;
            UserManager.decreaseMoneyByOder(loginName, totalMoney);
            this.cocaList.splice(-numberWantToBuy);
        } else {
            console.log('The remaining coca are not enough')
        }
    }

    static buyStingRed(numberWantToBuy: number) {
        if (this.stingRedList.length >= numberWantToBuy) {
            const totalMoney = RefrigeratorManager.stingRedList[0].getMoney() * numberWantToBuy;
            UserManager.decreaseMoneyByOder(loginName, totalMoney);
            this.stingRedList.splice(-numberWantToBuy);
        } else {
            console.log('The remaining sting red are not enough')
        }
    }

    static buyStingYellow(numberWantToBuy: number) {
        if (this.stingYellowList.length >= numberWantToBuy) {
            const totalMoney = RefrigeratorManager.stingYellowList[0].getMoney() * numberWantToBuy;
            UserManager.decreaseMoneyByOder(loginName, totalMoney);
            this.stingYellowList.splice(-numberWantToBuy);
        } else {
            console.log('The remaining sting yellow are not enough')
        }
    }
}