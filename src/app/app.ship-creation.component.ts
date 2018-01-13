import { Component, Input } from '@angular/core';
import {SearchService} from './app.search-service'

@Component({
  selector: 'app-ship-creation',
  template: `
    <h2>{{searchEntry}}</h2>

  `,
})
export class ShipCreationComponent {
  searchEntry: String;

  constructor(private searchService: SearchService) { }
  ngOnInit() {
      this.searchService.currentSearch.subscribe(searchEntry => this.searchEntry = searchEntry)
  }
}
