import {Component} from '@angular/core';
export class Item {
    purchase: string;
    done: boolean;
    price: number;

    constructor(purchase: string, price: number) {
        this.purchase = purchase;
        this.price = price;
    }
}
@Component({
    selector: "purchase-app",
    templateUrl: "app/template/component/app.component.html"
})

export class AppComponent {
    name: string = "Aleksandr";
    age: number = 25;
    items: Item[] = [
        {purchase: "Хлеб", done: false, price: 15.9},
        {purchase: "Масло", done: false, price: 60},
        {purchase: "Картофель", done: true, price: 22.6},
        {purchase: "Сыр", done: false, price: 310}
    ];

    addItem(text: string, price: number): void {
        this.items.push(new Item(text, price));
        console.log("test")
    }
}