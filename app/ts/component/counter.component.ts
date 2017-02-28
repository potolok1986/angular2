import {Component, Output, EventEmitter} from "@angular/core";
@Component({
    selector: "counter",

    template:`<input type="text" [(ngModel)]="counter" placeholder="Количество" class="form-control">
<button (click)="change(true)">+</button>
                <button (click)="change(false)">-</button>`
})
export class CountComponent{
    @Output() onChange = new EventEmitter <boolean>();
    change(value){
        this.onChange.emit(value);
    }
}