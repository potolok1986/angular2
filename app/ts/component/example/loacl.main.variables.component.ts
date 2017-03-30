import {Component} from "@angular/core";
@Component({
    selector: "local-main",
    template: `
<div class="page-header">
<local-child #counter></local-child>
<button (click)="counter.increment()">+</button>
<button (click)="counter.decrement()">-</button>
</div>`
})
export class LocalMainVariables {}