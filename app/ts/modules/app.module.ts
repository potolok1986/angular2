import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from '../component/app.component';
import {Child} from "../component/child.component";
import {ExampleMainComponent} from "../component/example/example.component";
import {ExampleChild} from "../component/example/example.child.component";
import {Example1Main} from "../component/example/example1.main.component";
import {Example1Child} from "../component/example/example1.child.component";
import {LocalVariablesChild} from "../component/example/local.variables.component";
import {LocalMainVariables} from "../component/example/loacl.main.variables.component";

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, Child, ExampleMainComponent,ExampleChild,Example1Child,Example1Main
    ,LocalVariablesChild,LocalMainVariables],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }