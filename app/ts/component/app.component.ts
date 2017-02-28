import {Component} from '@angular/core';
export class Item {
    purchase: string;
    done: boolean;
    price: number;
    count: number;

    constructor(purchase: string, price: number, count: number) {
        this.purchase = purchase;
        this.price = price;
        this.count = count;
    }
}
@Component({
    selector: "purchase-app",
    templateUrl: "app/template/component/app.component.html"
})

export class AppComponent {
    name: string = "Aleksandr";
    age: number = 25;
    counter:number = 0;
    items: Item[] = [
        {purchase: "Хлеб", done: false, price: 15.9, count: 2},
        {purchase: "Масло", done: false, price: 60, count: 3},
        {purchase: "Картофель", done: true, price: 22.6, count: 1},
        {purchase: "Сыр", done: false, price: 310, count: 1}
    ];

    addItem(text: string, price: number, count: number): void {
        this.items.push(new Item(text, price,count));
    }
    onChange(count){
        count ? this.counter++ : this.counter--;
    }
}