import {Injectable} from '@angular/core';
import {CompanyMadePhones} from "../services/companyMadePhones";

@Injectable()
export class DataCompanyService {

    constructor() {
    };

    private data: CompanyMadePhones[] = [{name: "Apple"}, {name: "Huawei"}, {name: "Xiaomi"}, {name: "Samsung"}, {name: "LG"}, {name: "Motorola"}, {name: "Alcatel"}];
    getData(){
        return this.data;
    }

}