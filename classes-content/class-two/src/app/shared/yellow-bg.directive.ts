import {AfterViewInit, Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[yellowBg]'
})
export class YellowBgDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log(elementRef);
    // elementRef.nativeElement.style.backgroundColor = 'yellow';
    this.renderer.addClass(this.elementRef.nativeElement, 'yellowBg');

  }

}
