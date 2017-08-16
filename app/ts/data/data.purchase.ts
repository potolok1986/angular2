import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
@Injectable()
export class DataPurchase {
    constructor(private http: Http) {
    }

    getData() {
        return this.http.get("json/purchase1.json")
    }
}