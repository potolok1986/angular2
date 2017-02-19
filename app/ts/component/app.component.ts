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
    template: `<div class="page-header">
    <h1> Список покупок </h1>
</div>
<div class="panel">
    <div class="form-inline">
        <div class="form-group">
            <div class="col-md-8">
                <input type="text" [(ngModel)]="text" placeholder="Название" >
            </div>
        </div>
        <div class="form-group">
            <div class="col-md-8">
                <input type="text" [(ngModel)]="price" placeholder="Цена" >
            </div>
        </div>
        <div class="form-group">
            <div class="col-md-offset-2 col-md-8">
                <button class="btn btn-default" (click)="addItem(text,price)">Добавить</button>
            </div>
        </div>
    </div>
</div>
<table class="table table-striped">
    <thead>
    <tr>
        <th>Предмет</th>
        <th>Цена</th>
        <th>Куплено</th>
    </tr>
    </thead>
    <tbody>
    <tr *ngFor="let item of items">
        <th>{{item.purchase}}</th>
        <th>{{item.price}}</th>
        <th>
            <input type="checkbox" [(ngModel)]="item.done">
        </th>
    </tr>
    </tbody>
</table>
`

})

export class AppComponent {
    items: Item[] = [
        {purchase: "Хлеб", done: false, price: 15.9},
        {purchase: "Масло", done: false, price: 60},
        {purchase: "Картофель", done: true, price: 22.6},
        {purchase: "Сыр", done: false, price: 310}
    ];

    addItem(text: string, price: number): void {
        this.items.push(new Item(text, price))
    }
}