import {Directive, ElementRef, Renderer, HostListener} from "@angular/core";
@Directive({
    selector: '[bold]'
})
export class BoldDirective {
    constructor(private element: ElementRef, private renderer: Renderer) {
        this.setFontWieght("normal")
    }

    @HostListener("mouseenter") onMouseEnter() {
        this.setFontWieght("bold")
    }
    @HostListener("mouseleave") onMouseLeave(){
        this.setFontWieght("normal")
    }
    private setFontWieght(val){
        this.renderer.setElementStyle(this.element.nativeElement,"font-weight", val)
    }
}