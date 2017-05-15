import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from '../component/app.component';
import {Child} from "../component/child.component";
import {ExampleModule} from "./examples.module";
import {DirectivesModule} from "./directives.module";
import {PhoneComponent} from "../component/example/phone.component";


@NgModule({
    imports:      [ BrowserModule, FormsModule,ExampleModule,DirectivesModule],
    declarations: [ AppComponent, Child, PhoneComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }