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

  addShipButtonClicked(): void {
    this.searchService.toggleAddShip(true);
  }

  //Called whenever the search input changes. the search input is also saved to the searchEntry through the [(ngModel)] property
  searchChange (change) { // Assume everything changed since this function is called for any change to a filter, sortBy, or search bar. The provider will not "send" the changes if the value is the same as the old value (efficiency)
    this.searchService.changeSearch(this.searchEntry);
    this.searchService.changeSortBy(this.sortBy);
    this.searchService.changeSortOrder(parseInt(this.sortOrder));
  }

  constructor(private searchService: SearchService) { }



}
