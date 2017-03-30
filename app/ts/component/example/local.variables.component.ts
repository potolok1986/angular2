import {Component} from "@angular/core";
@Component({
    selector: "local-child",
    template: `<p>Нажато количество раз {{counter}}</p>`
})
export class LocalVariablesChild {
    counter: number = 0;
    increment(){this.counter = this.parseCount(++this.counter)};
    decrement(){this.counter = this.parseCount(--this.counter)};

    private parseCount(count:number):number{
        return count < 0 ? 0 : count
    }
}