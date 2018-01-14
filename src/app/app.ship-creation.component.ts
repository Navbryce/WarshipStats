import { Component, Input } from '@angular/core';
import {SearchService} from './app.search-service'

@Component({
  selector: 'app-ship-creation',
  templateUrl: './app.ship-creation.html'
})
export class ShipCreationComponent {
  searchEntry: String; // Never DIRECTLY MODIFY THIS VARIABLE
  addShipState: boolean; // Never DIRECTLY MODIFY THIS VARIABLE
  shipsToAdd: Array<Ship>; // An array of the ships to add

  constructor(private searchService: SearchService) { }
  ngOnInit() {
      this.searchService.currentSearch.subscribe(searchEntry => this.searchEntry = searchEntry)
      this.searchService.addShip.subscribe(newState => this.addShipState = newState);
      this.shipsToAdd = [];
      this.shipsToAdd.push(new Ship("", 0)); // shipsToAdd will have a minimum of one ship

  }
  closeCreation(): void {
    this.searchService.toggleAddShip(false);
  }

  changeAddShipCount(change: number): void {
    if (this.shipsToAdd.length + change >= 1) { //Don't make the change if it lowers the number of ships below 1
      if (change < 0) { // Remove ships. Change is a negative value
        change = change * -1;
        this.shipsToAdd.splice(this.shipsToAdd.length - change, change); //Removes change number of ships from shipsToAdd
      } else { // Add ships
        while (change > 0) {
          this.shipsToAdd.push(new Ship("", 0));
          change -= 1;
        }
      }
    }
  }
}

export class Ship {
  scrapeURL: String;
  configuration: number;
  constructor(scrapeURLString: String, configurationNumber: number) {
    this.scrapeURL = scrapeURLString;
    this.configuration = configurationNumber;
  }

}
