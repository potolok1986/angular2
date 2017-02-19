import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from '../component/app.component';
import {Child} from "../component/child.component";

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent,Child ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }