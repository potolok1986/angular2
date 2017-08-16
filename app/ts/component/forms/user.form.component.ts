import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
@Component({
    selector: 'user-form',
    templateUrl: 'app/template/forms/user.form.html',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `]
})
export class UserFormComponent{
    submit(form: NgForm){
        console.log(form);
    }
}