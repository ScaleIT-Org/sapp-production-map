import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

/**
 * Generated class for the HideOnClickDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: "[hide-on-click]" // Attribute selector
})
export class HideOnClickDirective {
  constructor(private element: ElementRef, private renderer: Renderer) {
    console.log("Hello HideOnClickDirective Directive");
  }

  @HostListener("onClick")
  onClick() {
    //  this.element.nativeElement.style.display = "none";
    this.renderer.setElementStyle(
      this.element.nativeElement,
      "display",
      "none"
    );
    console.log("marzi" + this.element.nativeElement.style.marginLeft);
  }
}
