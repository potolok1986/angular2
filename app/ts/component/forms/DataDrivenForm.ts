import {Component} from "@angular/core";
import {FormGroup, FormControl, Validators, NgForm, FormArray} from "@angular/forms";
@Component({
    selector: "data-driven-form",
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    templateUrl: "app/template/forms/data.driven.form.html"
})
export class DataDrivenForm {
    myForm: FormGroup;

    constructor() {
        this.myForm = new FormGroup({
            "userName": new FormControl("Tom", [Validators.required, DataDrivenForm.userNameValidator]),
            "userEmail": new FormControl("", [Validators.required,
                Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")]),
            "phones": new FormArray([
                new FormControl("+7", Validators.required)
            ])
        })
    }

    static userNameValidator(control: FormControl): {[s: string]: boolean} {
        return (!control.value || control.value.length) < 3 ? {"userName": true} : null
    }
    submit(){
        console.log(this.myForm)
    }
    addPhone(){
        (<FormArray>this.myForm.controls["phones"]).push(new FormControl("+7",Validators.required))
    }
}
