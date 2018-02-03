import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

//Used to share data between the two SIBLING (unrelated) components: navbar and ship-creation


@Injectable()
export class SearchService {
  private searchEntrySource = new BehaviorSubject<string>("");
  private sortBySource = new BehaviorSubject<string>("displayName");
  private sortOrderSource = new BehaviorSubject<number>(1);
  private addShipSource = new BehaviorSubject<boolean>(false);

  currentSearch = this.searchEntrySource.asObservable(); // Gets the value of the searchEntrySource object as a dyanimc variable
  sortBy = this.sortBySource.asObservable();
  sortOrder = this.sortOrderSource.asObservable();
  addShip = this.addShipSource.asObservable(); //Get the value of addShp as a dyanimc variable

  constructor() { }
  changeSearch (newSearch: string) {
    if (newSearch != this.searchEntrySource.value) { // Make sure it has a new value. Otherwise don't change (efficiency purposes)
      this.searchEntrySource.next(newSearch)
    }
  }
  changeSortBy (newSortBy: string) {
    if (newSortBy != this.sortBySource.value) { // Make sure it has a new value. Otherwise don't change (efficiency purposes)
      this.sortBySource.next(newSortBy);
    }
  }
  changeSortOrder (newOrder: number) {
    if (newOrder != this.sortOrderSource.value) { // Make sure it has a new value. Otherwise don't change (efficiency purposes)
      this.sortOrderSource.next(newOrder);
    }
  }
  toggleAddShip (newState: boolean) {
    this.addShipSource.next(newState);
  }
}
