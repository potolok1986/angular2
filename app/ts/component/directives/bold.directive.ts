import {Directive, ElementRef, Renderer} from "@angular/core";
@Directive({
    selector: '[bold]'
})
export class BoldDirective {
    constructor(private element: ElementRef, private renderer: Renderer) {
        this.renderer.setElementStyle(this.element.nativeElement,"font-weight","bold")
    }
}