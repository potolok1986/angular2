import {Component} from "@angular/core";
@Component({
    selector: "while-example",
    template: `<p *while="conditions">Первый параграф</p><p *while="!conditions">Втрой параграй</p> <button (click)="toggle()">Изменить</button>`
})
export class WhileExampleComponent{
    conditions: boolean = true;
    toggle(){
        this.conditions = !this.conditions;
    }
}