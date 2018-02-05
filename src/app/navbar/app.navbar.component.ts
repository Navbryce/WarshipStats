import { Component, Input } from '@angular/core';
import {SearchService} from './app.search-service'


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

  addShipButtonClicked(): void {
    this.searchService.toggleAddShip(true);
  }

  //Called whenever the search input changes. the search input is also saved to the searchEntry through the [(ngModel)] property
  searchChange (change) { // Assume everything changed since this function is called for any change to a filter, sortBy, or search bar. The provider will not "send" the changes if the value is the same as the old value (efficiency)
    this.searchService.changeSearch(this.searchEntry);
    this.searchService.changeSortBy(this.sortBy);
    this.searchService.changeSortOrder(parseInt(this.sortOrder));
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

  constructor(private searchService: SearchService) { }
}

export class Option {
  optionValue: string;
  optionText: string;

  constructor (value: string, text: string) {
    this.optionValue = value;
    this.optionText = text;
  }
}
