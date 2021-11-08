import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el : ElementRef) { }


  @HostListener('mouseenter')
  onMouseEnter() //le nom de la méthode n'a que peu d'importance..
  {
    this.el.nativeElement.style.backgroundColor = "yellow"
  }

  @HostListener("click")
  onClick()
  {
    this.el.nativeElement.style.backgroundColor = "red"
  }

  @HostListener('mouseleave')
  onMouseLeave()
  {
    this.el.nativeElement.style.backgroundColor = null
  }

 
}
