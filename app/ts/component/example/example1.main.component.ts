import {Component} from "@angular/core";
@Component({
    selector:"example_1_main",
    template:`<div class="page-header"><example_1_child [(userName)]="name"></example_1_child>
<p>Введенное имя {{name}}</p></div>`
})
export class Example1Main{
    name: string = "Alexander"
}