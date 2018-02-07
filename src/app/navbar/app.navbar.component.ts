import { Component, Input, ChangeDetectorRef} from '@angular/core';
import {SearchService} from './app.search-service'
declare var $: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './app.navbar.html',
  styleUrls: ['./navbar-styles.css']

})
export class NavbarComponent {
  // Set defaults
  searchEntry = "";
  sortBy = "displayName";
  sortOrder = "1";
  sortByList = this.generateSortBy();
  rangeComplement = new Range(0, 0);

  constructor(private changeDetector: ChangeDetectorRef, private searchService: SearchService) { }

  ngAfterViewInit(): void{
    var navbar = this;
    $(document).ready(() => {
      $("#complement-range").ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 1000,
        from: -500,
        to: 500,
        onChange: function (data) {
          navbar.changeRangeComplement(data.from, data.to);
        }
      });
      $("#number-of-guns-range").ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 1000,
        from: -500,
        to: 500
      });
    });
  }

  addShipButtonClicked(): void {
    this.searchService.toggleAddShip(true);
    console.log(this.rangeComplement);

  }
  // Used to change the values of range complement. Force change detection because the change is made outside of the normal life cycle
  changeRangeComplement(from, to): void {
    this.rangeComplement.minValue = from;
    this.rangeComplement.maxValue = to;
    this.changeDetector.detectChanges();
  }
  // Generate sortby options
  generateSortBy(): Array<Option> {
    var sortByList = [];
    var sortBy = [
      {value: "displayName", text: "Name"},
      {value: "complement", text: "Complement"},
      {value: "armament.normalGun.sizeCalculate.numberOfValues", text: "Number of Guns"},
      {value: "armament.normalGun.sizeCalculate.average", text: "Average Size of Guns"},
      {value: "armament.normalGun.sizeCalculate.maxValue", text: "Largest Gun"},
      {value: "armament.normalGun.sizeCalculate.minValue", text: "Smallest Gun"},
      {value: "armament.normalGun.sizeCalculate.sum", text: "Sum of All Guns"},
      {value: "armament.normalGun.sizeCalculate.mode.value", text: "Mode Gun Size"},
      {value: "physicalAttributes.speed.value", text: "Speed"},
    ]
    sortBy.forEach((sortByObject) => { // Puts it into a standardized form
      var option = new Option(sortByObject.value, sortByObject.text);
      sortByList.push(option);
    });

    return sortByList;
  }
  //Called whenever the search input changes. the search input is also saved to the searchEntry through the [(ngModel)] property
  searchChange (change) { // Assume everything changed since this function is called for any change to a filter, sortBy, or search bar. The provider will not "send" the changes if the value is the same as the old value (efficiency)
    this.searchService.changeSearch(this.searchEntry);
    this.searchService.changeSortBy(this.sortBy);
    this.searchService.changeSortOrder(parseInt(this.sortOrder));
  }
}

export class Option {
  optionValue: string;
  optionText: string;

  constructor (value: string, text: string) {
    this.optionValue = value;
    this.optionText = text;
  }
}
export class Range {
  minValue: number;
  maxValue: number;

  constructor(min: number, max: number) {
    this.minValue = min;
    this.maxValue = max;
  }
}
