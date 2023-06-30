/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[bitshiftersHilite]',
})
export class HiliteDirective {
  constructor(private elementRef:ElementRef) { }

  @HostListener('mouseenter') mouseover(){
    (this.elementRef.nativeElement as any).classList.add('hovered');
  }

  @HostListener('mouseleave') mouseleave(){
    (this.elementRef.nativeElement as any).classList.remove('hovered');
  }
}
