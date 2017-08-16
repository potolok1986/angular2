import {Phone} from "./phone";
export class PhoneWithMadeCompany extends Phone{
    constructor(public name:string, public price: number, public company:string){
        super(name,price)
    }
}