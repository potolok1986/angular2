import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {AppComponent}   from '../component/app.component';
import {ExampleModule} from "./examples.module";
import {DirectivesModule} from "./directives.module";
import {FormsComponentModule} from "./forms.modules";
import {HttpModule} from "@angular/http";
import {MyRouterModule} from "./MyRouterModule";
import {AnotherModule} from "./AnotherModule";
import {ChildRouteModule} from "./ChildRouteModule";
import {MyPipes} from "./MyPipes";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ExampleModule,
        DirectivesModule,
        FormsComponentModule,
        HttpModule,
        MyRouterModule,
        AnotherModule,
        ChildRouteModule,
        MyPipes
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}