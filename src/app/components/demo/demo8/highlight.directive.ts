import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el : ElementRef) { }


  @Input() appHighlight
  @Input() defaultColor

  @HostListener("mouseenter") 
  onMouseEnter()
  {
    this.el.nativeElement.style.backgroundColor = this.appHighlight
  }

  @HostListener("mouseleave")
  onMouseLeave()
  {
    this.el.nativeElement.style.backgroundColor = null
  }

  @HostListener("click")
  onMouseClick()
  {
    this.el.nativeElement.style.backgroundColor = this.defaultColor
    this.el.nativeElement.style.color = "red"
  }

 
}
