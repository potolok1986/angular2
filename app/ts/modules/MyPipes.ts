import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BasicPipes} from "../component/pipes/BasicPipes";
@NgModule({
    imports:[CommonModule],
    declarations:[BasicPipes],
    exports:[BasicPipes]
})
export class MyPipes{}