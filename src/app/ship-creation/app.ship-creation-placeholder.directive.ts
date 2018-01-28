import { Directive, ElementRef, Input, ContentChild } from '@angular/core';
// Apparently directives' selectors aren't case sensitive?
@Directive({
  selector: '[creation-input-verify]'
})

// Sets the value of an input to the value of an object. If the value of the object changes, the value of the input changes. Relevant if inputs are placed loop, where they are "recreated" whenever the # of loop iterations changes
// Not really necessary
export class PlaceHolderDirective {
  urlInput: ElementRef;
  @Input('creation-input-verify') shipURL: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit () {
    this.urlInput = this.el.nativeElement.getElementsByTagName("input")[0];
    this.setPlaceHolder(this.shipURL);
  }
  // Deals with changes to @Inputs
  ngOnChanges(changes){
    this.setPlaceHolder(this.shipURL);
  }
  setPlaceHolder (placeHolder: String): void {
    if (placeHolder.length != 0) {
      this.el.nativeElement.setAttribute('value', placeHolder);
    }
  }


}
