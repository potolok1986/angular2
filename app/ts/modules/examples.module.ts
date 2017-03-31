import { NgModule }      from '@angular/core';
import {ExampleMainComponent} from "../component/example/example.component";
import {ExampleChild} from "../component/example/example.child.component";
import {Example1Main} from "../component/example/example1.main.component";
import {Example1Child} from "../component/example/example1.child.component";
import {LocalVariablesChild} from "../component/example/local.variables.component";
import {LocalMainVariables} from "../component/example/loacl.main.variables.component";
import {Example} from "../component/example/example.main";
import {CommonModule} from "@angular/common";

@NgModule({
    imports:      [ CommonModule],
    declarations: [Example,ExampleMainComponent,ExampleChild,Example1Child,Example1Main,LocalVariablesChild,LocalMainVariables],
    exports:    [ Example ]
})
export class ExampleModule { }
