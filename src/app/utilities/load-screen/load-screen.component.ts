import { Component } from '@angular/core';
@Component({
  selector: 'load-screen',
  templateUrl: './load-screen.component.html',
  styleUrls: ['./load-screen.component.css']
})
export class LoadScreen {
  loading: boolean;
  ngOnInit () {
    this.loading = false;

    this.activateLoading();
  }

  // General Functions


  // Will return the old status
  setLoadingStatus (newStatus: boolean): boolean {
    var oldStatus = this.loading;
    this.loading = newStatus;

    return oldStatus;
  }

  // General Functions End

  // Load Screen Toggle Functions

  activateLoading (): void {
    var loadWrapper = document.getElementById("load-wrapper");
    loadWrapper.classList.add("load-active");
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  }

  deactivateLoading (): void {
    var loadWrapper = document.getElementById("load-wrapper");
    loadWrapper.classList.remove("load-active");
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }

  // Load Screen Toggle Functions End



}
