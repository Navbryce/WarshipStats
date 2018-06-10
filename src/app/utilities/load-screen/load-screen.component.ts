import { Component } from '@angular/core';
import { LoadScreenService } from './load-screen.service';
@Component({
  selector: 'load-screen',
  templateUrl: './load-screen.component.html',
  styleUrls: ['./load-screen.component.css']
})
export class LoadScreen {
  loadingReasons: object;
  loading: boolean;

  constructor(private loadScreenService: LoadScreenService) {
    loadScreenService.activateObservable.subscribe((reason) => {
      this.activateLoadingWithReason(reason);
    });
    loadScreenService.deactivateObservable.subscribe((reason) => {
      this.deactivateLoadingWithReason(reason);
    })
  }

  ngOnInit () {
    this.loading = false;
    this.loadingReasons = {};
  }

  // General Functions

  // Get loading reasons in the form of an array
  getLoadingReasons (): Array<string> {
    return Object.keys(this.loadingReasons);
  }

  // Will completely reset loading. Will essentially deactive loading no matter how many reasons there are
  resetLoading (): void {
    this.loadingReasons = {};
    this.deactivateLoading();
  }

  // General Functions End

  // Load Screen Toggle Functions

  activateLoadingWithReason (reason: string): void { // dependent on the number of reasons
    if (reason.length > 0) {
      if (this.loadingReasons[reason] == null) {
        this.loadingReasons[reason] = true; // Add it to the "reasons" HashMap
        this.activateLoading();
      }
    }

  }

  deactivateLoadingWithReason (reason: string): void { // dependent on the number of reasons left (only will deactivate if 0)
    if (reason.length > 0) {
      if (this.loadingReasons[reason] != null) {
        delete this.loadingReasons[reason]; // Remove it from the "reasons" HashMap
      }
      if (Object.keys(this.loadingReasons).length == 0) { // if there are no reasons for it to be loading, then loading should be deactivated
        this.deactivateLoading();
      }
    }
  }

  // Load Screen Toggle Functions End


  // Private Functions Begin

  // Toggle functions Begin
  private activateLoading (): void {
    if (!this.loading) {
      this.loading = true;
      var loadWrapper = document.getElementById("load-wrapper");
      loadWrapper.classList.add("load-active");
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
  }

  private deactivateLoading (): void {
    if (this.loading) {
      this.loading = false;
      var loadWrapper = document.getElementById("load-wrapper");
      loadWrapper.classList.remove("load-active");
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
  }
  // Toggle Functions End

  // Service Listener Functions Begin
  // Service Listener Functions End

  // Private Functions End



}
