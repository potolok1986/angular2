import {Component} from '@angular/core';
import {DataPurchase} from "../data/data.purchase";
import {Purchase} from "../services/purchase";
import {Response} from "@angular/http";

@Component({
    selector: "purchase-app",
    templateUrl: "app/template/component/app.component.html",
    providers: [DataPurchase]
})

export class AppComponent {
    name: string = "Aleksandr";
    age: number = 25;
    counter: number = 0;
    items: Purchase[] = [];

    constructor(public dataPurchase: DataPurchase) {
    }

    ngOnInit() {
        this.dataPurchase.getData().subscribe(
            (data: Response) => {
                this.items = data.json();
            },
            err => {
                console.log(err)
            });
    }

    addItem(text: string, price: number, count: number): void {
        this.items.push(new Purchase(text, false, price, count));
    }

    onChange(count) {
        count ? this.counter++ : this.counter--;
    }
}