import {Component} from "@angular/core";
import {Phone} from "../../services/phone";
import {DataService} from "../../data/data.service";
import {LogService} from "../../services/log"
@Component({
    templateUrl: "app/template/component/phone.component.html",
    selector:"phone-component",
    providers: [DataService, LogService]
})
export class PhoneComponent{
    items: Phone[] = [];
    constructor(public dataService: DataService){}
    getData(){
        this.items = this.dataService.getData();
    }
}