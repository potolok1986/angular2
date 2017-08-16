import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsComponent} from "../component/forms/main.form.component";
import {DataService} from "../data/data.service";
import {LogService} from "../services/log";
import {ExampleFirst} from "../component/forms/example.first";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserFormComponent} from "../component/forms/user.form.component";
import {DataDrivenForm} from "../component/forms/DataDrivenForm";
@NgModule({
    imports:[CommonModule,FormsModule,ReactiveFormsModule],
    declarations: [FormsComponent,ExampleFirst,UserFormComponent,DataDrivenForm],
    exports:[FormsComponent],
    providers: [DataService,LogService]
})
export class FormsComponentModule{}