import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AnotherComponent} from "../component/another/AnotherComponent";
import {Child} from "../component/another/child.component";
import {FormsModule} from "@angular/forms";
@NgModule({
    imports: [CommonModule,FormsModule],
    declarations: [AnotherComponent,Child],
    exports: [AnotherComponent]
})

export class AnotherModule{
}