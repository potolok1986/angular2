import {Component} from "@angular/core";
import {CompanyMadePhones} from "../../services/companyMadePhones";
import {DataCompanyService} from "../../data/data.company";
import {PhoneWithMadeCompany} from "../../services/PhoneWithMadeCompany";
import {Response} from "@angular/http";
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
        this.companyMadePhones.getData().subscribe((data: Response) => {
            this.companies = data.json();
        });
    }
    addPhone(name:string, price:number, company: string){
        this.phones.push(new PhoneWithMadeCompany(name,price,company));
    }
    onNameChange(){
        console.log(this.name)
    }
}