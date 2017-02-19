import {Component, Input} from "@angular/core";
@Component({
    selector: "child-comp",
    template: `<h2>Привет {{name}}</h2>`
})
export class Child {
    @Input() name: string;
}