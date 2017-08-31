import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsComponent} from "../component/forms/main.form.component";
import {Directives} from "../component/directives/main.directives.component";
import {Example} from "../component/example/example.main";
import {PhoneComponent} from "../component/example/phone.component";
import {MyRouterComponent} from "../component/MyRouter/MyRouterComponent";
import {AnotherComponent} from "../component/another/AnotherComponent";
import {ChildRoutMainComponent} from "../component/childRoute/ChildRoutMainComponent";
import {ChildInformation} from "../component/childRoute/ChildInformation";
import {ChildStat} from "../component/childRoute/ChildStat";
import {BasicPipes} from "../component/pipes/BasicPipes";
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot([
                {
                    path: "forms",
                    component: FormsComponent
                },
                {
                    path: "directives",
                    component: Directives
                },
                {
                    path: "example",
                    component: Example
                },
                {
                    path: "phone-component",
                    component: PhoneComponent
                },
                {
                    path: "another",
                    component: AnotherComponent
                },
                {
                    path: "child-route/:id",
                    component: ChildRoutMainComponent,
                    children: [{
                        path: "details",
                        component: ChildInformation
                    }, {
                        path: "stat",
                        component: ChildStat
                    }]
                },
                {
                    path: "pipes",
                    component: BasicPipes
                },
                {
                    path: "",
                    redirectTo: "pipes",
                    pathMatch: 'full'
                }
            ],
            {useHash: true})
    ],
    declarations: [MyRouterComponent],
    exports: [MyRouterComponent]
})
export class MyRouterModule {
}