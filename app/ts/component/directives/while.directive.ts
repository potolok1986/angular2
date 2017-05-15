import {Directive, TemplateRef, ViewContainerRef, Input} from "@angular/core";
@Directive({
    selector: "[while]"
})
export class WhileDirective {
    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef) {
    }
    @Input() set while(conditional: boolean){
        conditional ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear();
    }
}