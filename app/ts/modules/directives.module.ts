import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Directives} from "../component/directives/main.directives.component";
import {BoldDirective} from "../component/directives/bold.directive";
@NgModule({
    imports: [CommonModule],
    declarations: [Directives,BoldDirective],
    exports:[Directives]
})
export class DirectivesModule{}