import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ChildRoutMainComponent} from "../component/childRoute/ChildRoutMainComponent";
import {ChildInformation} from "../component/childRoute/ChildInformation";
import {ChildStat} from "../component/childRoute/ChildStat";
import {RouterModule} from "@angular/router";
@NgModule({
    imports:[CommonModule,RouterModule],
    declarations:[ChildRoutMainComponent,ChildInformation,ChildStat],
    exports:[ChildRoutMainComponent]
})
export class ChildRouteModule{}