import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[mouseHighlight]'
})
export class MouseHighlightDirective {

  // @HostListener('mouseenter', ['$event'])
  // onMouseEnter($event) {
  //   console.log($event);
  //   this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
  // }
  //
  // @HostListener('mouseleave', ['$event'])
  // onMouseLeave($event) {
  //   console.log($event);
  //   this.renderer.setStyle(this.el.nativeElement, 'background-color', 'white');
  //
  // }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elBackgroundColor = 'yellow';
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave() {
    this.elBackgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor')
  elBackgroundColor: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

}
