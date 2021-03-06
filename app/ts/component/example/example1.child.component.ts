import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
    selector: "example_1_child",
    template: `<input [ngModel]="userName" (ngModelChange)="onUserNameChange($event)" />`
})
export class Example1Child{
    @Input() userName:string;
    @Output() userNameChange = new EventEmitter<string>();
    onUserNameChange(name:string){
        this.userName = name;
        this.userNameChange.emit(name);
    }
}