import {RefrigeratorManager} from "./RefrigeratorManager";
import {UserManager} from "../UserManager/UserManager";
import {loginName} from "../../main";
import {ChickenNoodles} from "./Refrigerator/Food/Noodle/ChickenNoodles";
import {FriedNoodles} from "./Refrigerator/Food/Noodle/FriedNoodles";
import {FriedRiceWithBeefAndPickles} from "./Refrigerator/Food/Rice/FriedRiceWithBeefAndPickles";
import {MixedFriedRice} from "./Refrigerator/Food/Rice/MixedFriedRice";
import {Coca} from "./Refrigerator/Food/SorfDrink/Cocacola/Coca";
import {StingRed} from "./Refrigerator/Food/SorfDrink/Sting/StingRed";
import {StingYellow} from "./Refrigerator/Food/SorfDrink/Sting/StingYellow";

export class OvenManager extends RefrigeratorManager {
    static buyFood(numberWantToBuy: number, foodName: string) {
        let foodList: ChickenNoodles[] | FriedNoodles[] | FriedRiceWithBeefAndPickles[] | MixedFriedRice[] | Coca[] | StingRed[] | StingYellow[];
        let notEnoughMsg: string;
        let totalMoney: number;
        switch (foodName) {
            case "chickenNoodle":
                foodList = this.chickenNoodleList;
                notEnoughMsg = "The remaining fried noodles are not enough";
                break;
            case "friedNoodle":
                foodList = this.friedNoodleList;
                notEnoughMsg = "The remaining fried noodles are not enough";
                break;
            case "friedRiceWithBeefAndPickles":
                foodList = this.friedRiceWithBeefAndPicklesList;
                notEnoughMsg = "The remaining fried rice with beef and pickles are not enough";
                break;
            case "mixedFriedRice":
                foodList = this.mixedFriedRiceList;
                notEnoughMsg = "The remaining mixed fried rice are not enough";
                break;
            case "coca":
                foodList = this.cocaList;
                notEnoughMsg = "The remaining coca are not enough";
                break;
            case "stingRed":
                foodList = this.stingRedList;
                notEnoughMsg = "The remaining sting red are not enough";
                break;
            case "stingYellow":
                foodList = this.stingYellowList;
                notEnoughMsg = "The remaining sting yellow are not enough";
                break;
            default:
                console.log("Invalid food name");
                return;
        }
        if (foodList.length >= numberWantToBuy) {
            totalMoney = foodList[0].getMoney() * numberWantToBuy;
            UserManager.decreaseMoneyByOder(loginName, totalMoney);
            foodList.splice(-numberWantToBuy);
        } else {
            console.log(notEnoughMsg);
        }
    }
}