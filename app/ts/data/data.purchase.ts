import {Injectable} from "@angular/core";
import {Purchase} from "../services/purchase";
@Injectable()
export class DataPurchase {
    private returnData(){
        return [{purchase: "Хлеб", done: false, price: 15.9, count: 2},
            {purchase: "Масло", done: false, price: 60, count: 3},
            {purchase: "Картофель", done: true, price: 22.6, count: 1},
            {purchase: "Сыр", done: false, price: 310, count: 1}]
    }
    private data: Purchase[] = this.returnData();
    getData():Purchase[]{
        return this.data;
    }
}