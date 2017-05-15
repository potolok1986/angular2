import {Phone} from "../services/phone";
import {Injectable} from "@angular/core";
import {LogService} from "../services/log"
@Injectable()
export class DataService{
    constructor(private logService: LogService){}
    private data: Phone[] = [
        { name:"Apple iPhone 7", price: 56000},
        { name: "HP Elite x3", price: 56000},
        { name: "Alcatel Idol S4", price: 25000}
    ];
    getData():Phone[]{
        this.logService.write("operation get data");
        return this.data
    };
    addData(name:string, price: number){
        this.data.push(new Phone(name, price))
    }
}