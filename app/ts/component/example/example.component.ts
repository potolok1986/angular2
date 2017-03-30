import {Component} from "@angular/core";
@Component({
    selector: "example-comp",
    template:
        `<h3>Count click: {{clicks}}</h3>
            <example-child-comp (onChange)="onChange($event)"></example-child-comp>`
})
export class ExampleMainComponent{
    clicks:number = 0;
    onChange(boolIncrement){
        boolIncrement ? this.clicks++ : this.clicks--
    }
}