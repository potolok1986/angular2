import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "child-rout",
    templateUrl: "app/template/childRout/childRout.html"
})
export class ChildRoutMainComponent{
    private id:number;
    constructor(private route:ActivatedRoute ){}
    ngOnInit(){
        this.id = +this.route.snapshot.params['id'];
    }
}