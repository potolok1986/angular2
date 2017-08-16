import {Component} from "@angular/core";
import {CompanyMadePhones} from "../../services/companyMadePhones";
import {DataCompanyService} from "../../data/data.company";
import {PhoneWithMadeCompany} from "../../services/PhoneWithMadeCompany";
@Component({
    selector: "example-first",
    templateUrl: "app/template/forms/example-first.html",
    providers:[DataCompanyService]
})
export class ExampleFirst{
   // company: CompanyMadePhones[];
    phones: PhoneWithMadeCompany[] = [];
    companies: CompanyMadePhones[];
    name: string;
    constructor(public companyMadePhones: DataCompanyService){}
    ngOnInit(){
        setTimeout(()=>{
            this.companies = this.companyMadePhones.getData();
        },1000);
    }
    addPhone(name:string, price:number, company: string){
        this.phones.push(new PhoneWithMadeCompany(name,price,company));
    }
    onNameChange(){
        console.log(this.name)
    }
}