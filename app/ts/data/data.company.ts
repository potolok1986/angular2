import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class DataCompanyService {
    constructor(private http: Http) {
    };
    getData(){
        return this.http.get("json/cellPhoneCompanies.json");
    }
}