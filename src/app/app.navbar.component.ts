import { Component, Input } from '@angular/core';
import {SearchService} from './app.search-service'


@Component({
  selector: 'app-navbar',
  templateUrl: './app.navbar.html',

})
export class NavbarComponent {
  searchEntry: String;

  //Called whenever the search input changes. the search input is also saved to the searchEntry through the [(ngModel)] property
  searchChange (change) {
    this.searchService.changeSearch(change);
  }

  constructor(private searchService: SearchService) { }

}
