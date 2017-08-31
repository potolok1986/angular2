import {Component, Input} from "@angular/core";
@Component({
    selector: "child-comp",
    template: `<h2>Привет {{name}}</h2>
                <p>Твой возраст {{age}}</p>`
})
export class Child {
    _age: number;
    @Input() name: string;

    @Input()
    set age(age: number) {
        this._age = age < 18 ? 18 : age
    }

    get age() {
        return this._age;
    }
}