import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

// Returns null when true. Else, returns "error" object
export function isWikipediaLink(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    var errorMessage;
    if (control.value != null) {
      var wikipediaLinks = ["en.wikipedia.org"]
      var containsWikipediaLink = false;

      for (var linkTypeCounter = 0; linkTypeCounter < wikipediaLinks.length && !containsWikipediaLink; linkTypeCounter++) {
        var linkStyle = wikipediaLinks[linkTypeCounter];
        containsWikipediaLink = control.value.includes(linkStyle); // for loop exists when true
      }
      if (!containsWikipediaLink) {
        errorMessage = {
          containsWikipediaLink: false
        };
      }
    }
    return errorMessage;
  };
}

@Directive({
  selector: '[createShipValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: CreateShipValidator, multi: true}]
})
export class CreateShipValidator implements Validator {

  validate(control: AbstractControl): {[key: string]: any} {
    return isWikipediaLink()(control);
  }
}
