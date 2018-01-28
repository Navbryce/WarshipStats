import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

//Used to share data between the two SIBLING (unrelated) components: navbar and ship-creation


@Injectable()
export class SearchService {
  private searchEntrySource = new BehaviorSubject<string>("");
  private addShipSource = new BehaviorSubject<boolean>(false);

  currentSearch = this.searchEntrySource.asObservable(); // Gets the value of the searchEntrySource object as a dyanimc variable
  addShip = this.addShipSource.asObservable(); //Get the value of addShp as a dyanimc variable

  constructor() { }
  changeSearch (newSearch: string) {
    this.searchEntrySource.next(newSearch)
  }
  toggleAddShip (newState: boolean) {
    this.addShipSource.next(newState);
  }
}
