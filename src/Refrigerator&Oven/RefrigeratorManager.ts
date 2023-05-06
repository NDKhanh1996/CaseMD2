import {FriedNoodles} from "./Refrigerator/Food/Noodle/FriedNoodles";
import {ChickenNoodles} from "./Refrigerator/Food/Noodle/ChickenNoodles";
import {FriedRiceWithBeefAndPickles} from "./Refrigerator/Food/Rice/FriedRiceWithBeefAndPickles";
import {MixedFriedRice} from "./Refrigerator/Food/Rice/MixedFriedRice";
import {Coca} from "./Refrigerator/Food/SorfDrink/Cocacola/Coca";
import {StingRed} from "./Refrigerator/Food/SorfDrink/Sting/StingRed";
import {StingYellow} from "./Refrigerator/Food/SorfDrink/Sting/StingYellow";

export class RefrigeratorManager {
    protected static chickenNoodleList: ChickenNoodles[] = [];
    protected static friedNoodleList: FriedNoodles[] = [];
    protected static friedRiceWithBeefAndPicklesList: FriedRiceWithBeefAndPickles[] = [];
    protected static mixedFriedRiceList: MixedFriedRice[] = [];
    protected static cocaList: Coca[] = [];
    protected static stingRedList: StingRed[] = [];
    protected static stingYellowList: StingYellow[] = [];
    protected static chickenNoodle: object = {
        name: 'Chicken noodle',
        get number(): number {
            return RefrigeratorManager.chickenNoodleList.length;
        }
    }
    protected static friedNoodle: object = {
        name: 'Fried noodle',
        get number(): number {
            return RefrigeratorManager.friedNoodleList.length;
        }
    }
    protected static friedRiceWithBeefAndPickles: object = {
        name: 'Fried rice with beef and pickles',
        get number(): number {
            return RefrigeratorManager.friedRiceWithBeefAndPicklesList.length;
        }
    }
    protected static mixedFriedRice: object = {
        name: 'mixed fried rice',
        get number(): number {
            return RefrigeratorManager.mixedFriedRiceList.length;
        }
    }
    protected static coca: object = {
        name: 'Coca',
        get number(): number {
            return RefrigeratorManager.cocaList.length;
        }
    }
    protected static stingRed: object = {
        name: 'Sting red',
        get number(): number {
            return RefrigeratorManager.stingRedList.length;
        }
    }
    protected static stingYellow: object = {
        name: 'Sting yellow',
        get number(): number {
            return RefrigeratorManager.stingYellowList.length;
        }
    }
    protected static list: Array<object> = [this.chickenNoodle, this.friedNoodle, this.friedRiceWithBeefAndPickles, this.mixedFriedRice, this.coca, this.stingRed, this.stingYellow];

    static getList(): Array<object> {
        console.table(this.list)
        return this.list;
    }

    static buyFood(numberWantToBuy: number, foodName: string) {
        for (let i = 0; i < numberWantToBuy; i++) {
            switch (foodName) {
                case 'chickenNoodle':
                    this.chickenNoodleList.push(new ChickenNoodles());
                    break;
                case 'friedNoodle':
                    this.friedNoodleList.push(new FriedNoodles());
                    break;
                case 'friedRiceWithBeefAndPickles':
                    this.friedRiceWithBeefAndPicklesList.push(new FriedRiceWithBeefAndPickles());
                    break;
                case 'mixedFriedRice':
                    this.mixedFriedRiceList.push(new MixedFriedRice());
                    break;
                case 'coca':
                    this.cocaList.push(new Coca());
                    break;
                case 'stingRed':
                    this.stingRedList.push(new StingRed());
                    break;
                case 'stingYellow':
                    this.stingYellowList.push(new StingYellow());
                    break;
            }
        }
    }
}