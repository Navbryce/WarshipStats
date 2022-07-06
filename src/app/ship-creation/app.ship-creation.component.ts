import { Component, Input, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { LoadScreenService } from '../utilities/load-screen/load-screen.service';
import {SearchService} from '../navbar/app.search-service'
import { HttpClient } from '@angular/common/http';
import {environment} from 'environments/environment';

@Component({
  selector: 'app-ship-creation',
  templateUrl: './app.ship-creation.html',
  styleUrls: ['ship-creation-styles.css']

})
export class ShipCreationComponent {
  @ViewChildren('shipURL') shipURLS:QueryList<ElementRef>;
  urlsArray: Array<ElementRef>;
  searchEntry: String; // Never DIRECTLY MODIFY THIS VARIABLE
  addShipState: boolean; // Never DIRECTLY MODIFY THIS VARIABLE
  shipsToAdd: Array<Ship>; // An array of the ships to add


  // Inject searchService to share variables and HTTP client to communicate with the backend
  constructor(private loadScreen: LoadScreenService, private searchService: SearchService, private http: HttpClient) { }
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

  submitShipsToAdd(): void { //Scrape the shis inputed by the user (stored under this.shipsToAdd)
    this.loadScreen.activateLoadingWithReason("scraping ship");
    var body = {
      ships: this.shipsToAdd
    };
    var fullIP = environment.apiURL;
    this.http.post(fullIP + '/ships/scrapeShips', body).subscribe(data => {
      console.log("Scrape End Status:" + data);
      this.searchService.forceShipUpdate();
      this.loadScreen.deactivateLoadingWithReason("scraping ship");
      this.closeCreation();
    });
  }
  getKeysArray(object: Object): Array<String>{
      return Object.keys(object);
  }
}

export class Ship {
  url: String;
  configuration: number;
  constructor(urlString: String, configurationNumber: number) {
    this.url = urlString;
    this.configuration = configurationNumber;
  }
}
