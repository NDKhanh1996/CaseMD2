import {FriedNoodles} from "./Warehouse/Food/Noodle/FriedNoodles";
import {ChickenNoodles} from "./Warehouse/Food/Noodle/ChickenNoodles";
import {FriedRiceWithBeefAndPickles} from "./Warehouse/Food/Rice/FriedRiceWithBeefAndPickles";
import {MixedFriedRice} from "./Warehouse/Food/Rice/MixedFriedRice";
import {Coca} from "./Warehouse/Food/SorfDrink/Cocacola/Coca";
import {StingRed} from "./Warehouse/Food/SorfDrink/Sting/StingRed";
import {StingYellow} from "./Warehouse/Food/SorfDrink/Sting/StingYellow";

class WarehouseManager {
    private static chickenNoodleList: ChickenNoodles[] = [];
    private static friedNoodleList: FriedNoodles[] = [];
    private static friedRiceWithBeefAndPicklesList: FriedRiceWithBeefAndPickles[] = [];
    private static mixedFriedRiceList: MixedFriedRice[] = [];
    private static cocaList: Coca[] = [];
    private static stingRedList: StingRed[] = [];
    private static stingYellowList: StingYellow[] = [];

    private static chickenNoodle: object = {
        name: 'Chicken noodle',
        get number(): number {
            return WarehouseManager.chickenNoodleList.length;
        }
    }

    private static friedNoodle: object = {
        name: 'Fried noodle',
        get number(): number {
            return WarehouseManager.friedNoodleList.length;
        }
    }

    private static friedRiceWithBeefAndPickles: object = {
        name: 'Fried rice with beef and pickles',
        get number(): number {
            return WarehouseManager.friedRiceWithBeefAndPicklesList.length;
        }
    }

    private static mixedFriedRice: object = {
        name: 'mixed fried rice',
        get number(): number {
            return WarehouseManager.mixedFriedRiceList.length;
        }
    }

    private static coca: object = {
        name: 'Coca',
        get number(): number {
            return WarehouseManager.cocaList.length;
        }
    }

    private static stingRed: object = {
        name: 'Sting red',
        get number(): number {
            return WarehouseManager.stingRedList.length;
        }
    }

    private static stingYellow: object = {
        name: 'Sting yellow',
        get number(): number {
            return WarehouseManager.stingYellowList.length;
        }
    }

    private static list: Array<object> = [this.chickenNoodle, this.friedNoodle, this.friedRiceWithBeefAndPickles, this.mixedFriedRice, this.coca, this.stingRed, this.stingYellow];

    static getList(): Array<object> {
        return this.list;
    }

    static buyChickenNoodle() {
        this.chickenNoodleList.push(new ChickenNoodles());
    }

    static buyFriedNoodle() {
        this.friedNoodleList.push(new FriedNoodles());
    }

    static buyFriedRiceWithBeefAndPickles() {
        this.friedRiceWithBeefAndPicklesList.push(new FriedRiceWithBeefAndPickles());
    }

    static buyMixedFriedRice() {
        this.mixedFriedRiceList.push(new MixedFriedRice());
    }

    static buyCoca() {
        this.cocaList.push(new Coca());
    }

    static buyStingRed() {
        this.stingRedList.push(new StingRed());
    }

    static buyStingYellow() {
        this.stingYellowList.push(new StingYellow());
    }
}

WarehouseManager.buyFriedNoodle()
WarehouseManager.buyFriedNoodle()
WarehouseManager.buyFriedNoodle()
WarehouseManager.buyChickenNoodle()
WarehouseManager.buyChickenNoodle()
WarehouseManager.buyChickenNoodle()
WarehouseManager.buyStingYellow()
WarehouseManager.buyStingRed()
WarehouseManager.buyCoca()
WarehouseManager.buyCoca()
WarehouseManager.buyCoca()
WarehouseManager.buyMixedFriedRice()
WarehouseManager.buyFriedRiceWithBeefAndPickles()
WarehouseManager.buyFriedRiceWithBeefAndPickles()
WarehouseManager.buyFriedRiceWithBeefAndPickles()
WarehouseManager.buyFriedRiceWithBeefAndPickles()
WarehouseManager.buyFriedRiceWithBeefAndPickles()

console.table(WarehouseManager.getList())