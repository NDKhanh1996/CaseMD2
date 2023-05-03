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

    // have to create multiple methods so no need to enter arguments

    static buyChickenNoodle(numberWantToBuy: number) {
        for (let i: number = 0; i < numberWantToBuy; i++) {
            this.chickenNoodleList.push(new ChickenNoodles());
        }
    }

    static buyFriedNoodle(numberWantToBuy: number) {
        for (let i: number = 0; i < numberWantToBuy; i++) {
            this.friedNoodleList.push(new FriedNoodles());
        }
    }

    static buyFriedRiceWithBeefAndPickles(numberWantToBuy: number) {
        for (let i: number = 0; i < numberWantToBuy; i++) {
            this.friedRiceWithBeefAndPicklesList.push(new FriedRiceWithBeefAndPickles());
        }
    }

    static buyMixedFriedRice(numberWantToBuy: number) {
        for (let i: number = 0; i < numberWantToBuy; i++) {
            this.mixedFriedRiceList.push(new MixedFriedRice());
        }
    }

    static buyCoca(numberWantToBuy: number) {
        for (let i: number = 0; i < numberWantToBuy; i++) {
            this.cocaList.push(new Coca());
        }
    }

    static buyStingRed(numberWantToBuy: number) {
        for (let i: number = 0; i < numberWantToBuy; i++) {
            this.stingRedList.push(new StingRed());
        }
    }

    static buyStingYellow(numberWantToBuy: number) {
        for (let i: number = 0; i < numberWantToBuy; i++) {
            this.stingYellowList.push(new StingYellow());
        }
    }
}