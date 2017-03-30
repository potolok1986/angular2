import {Component, Output, EventEmitter} from "@angular/core";
@Component({
    selector: "example-child-comp",
    template: `<button (click)="change(true)">+</button>
               <button (click)="change(false)">-</button>`
})
export class ExampleChild{
    @Output() onChange = new EventEmitter <boolean>();
    change(boolIncrement){
        this.onChange.emit(boolIncrement);
    }
}