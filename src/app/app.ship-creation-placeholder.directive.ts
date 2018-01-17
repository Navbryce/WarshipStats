import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[placeHolder]'
})

// Sets the value of an input to the value of an object. If the value of the object changes, the value of the input changes. Relevant if inputs are placed loop, where they are "recreated" whenever the # of loop iterations changes
export class PlaceHolderDirective {
  @Input('placeHolder') shipURL: string;

  constructor(private el: ElementRef) { }

  ngOnInit () {
    this.setPlaceHolder(this.shipURL);
  }
  ngOnChanges(changes){
    this.setPlaceHolder(this.shipURL);
  }
  setPlaceHolder (placeHolder: String): void {
    if (placeHolder.length != 0) {
      this.el.nativeElement.setAttribute('value', placeHolder);
    }
  }


}
