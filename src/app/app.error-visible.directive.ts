import { Directive, ElementRef, Input} from '@angular/core';
// Apparently directives' selectors aren't case sensitive?
@Directive({
  selector: '[error-visible]'
})

// Sets if the error message is visible
export class ErrorVisibleDirective {


  constructor(private inputElement: ElementRef) {
  }

  ngAfterContentInit () {
    var mutationObserver = new MutationObserver((mutations) => {
      this.changeError(this.inputElement.nativeElement.className)
    });
    mutationObserver.observe(this.inputElement.nativeElement, {attributeFilter: ["class"]});
  }
  // Deals with changes to @Inputs

  changeError (currentClassName: String): void {
    if(currentClassName.search("ng-valid") >= 0){
      this.setErrorState("hidden");
    }else{
      this.setErrorState("visible");
    }
  }

  setErrorState (state: string): void {
    document.getElementById(this.inputElement.nativeElement.id + '-error').style.visibility = state;

  }




}
