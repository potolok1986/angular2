import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Directives} from "../component/directives/main.directives.component";
import {BoldDirective} from "../component/directives/bold.directive";
import {WhileDirective} from "../component/directives/while.directive";
import {WhileExampleComponent} from "../component/example/while.example.component";
@NgModule({
    imports: [CommonModule],
    declarations: [Directives,BoldDirective,WhileDirective,WhileExampleComponent],
    exports:[Directives]
})
export class DirectivesModule{}