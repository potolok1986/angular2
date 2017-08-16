import {Phone} from "../services/phone";
import {Injectable} from "@angular/core";
import {LogService} from "../services/log"
import {Http, Response} from "@angular/http";
@Injectable()
export class DataService {
    data: Phone[];
    constructor(private logService: LogService, private http: Http) {
        this.http.get("json/phones.json").subscribe((data:Response)=>{
            this.data = data.json();
        })
    }
    getData() {
        this.logService.write("operation get data");
        return this.data
    };

    addData(name: string, price: number) {
        this.data.push(new Phone(name, price))
    }
}