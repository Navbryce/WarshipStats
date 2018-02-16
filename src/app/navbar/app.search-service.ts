import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

//Used to share data between the two SIBLING (unrelated) components: navbar and ship-creation


@Injectable()
export class SearchService {
  private searchEntrySource = new BehaviorSubject<string>("");
  private sortBySource = new BehaviorSubject<string>("displayName");
  private sortOrderSource = new BehaviorSubject<number>(1);
  private addShipSource = new BehaviorSubject<boolean>(false);
  private rangeFiltersSource; // Instantiated in constructor

  initialRangeFilters: Array<RangeFilter>; // Used by the navbar.component.ts
  currentSearch = this.searchEntrySource.asObservable(); // Gets the value of the searchEntrySource object as a dyanimc variable
  sortBy = this.sortBySource.asObservable();
  sortOrder = this.sortOrderSource.asObservable();
  addShip = this.addShipSource.asObservable(); //Get the value of addShp as a dyanimc variable
  rangeFilters: any; // Instantiated in constructor. Observable of BehaviorSubject

  constructor() {
    this.rangeFiltersSource = new BehaviorSubject<Array<RangeFilter>>(this.generateRangeFilters());
    this.rangeFilters = this.rangeFiltersSource.asObservable();
    this.initialRangeFilters = this.rangeFiltersSource.value;
  }

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

  changeRangeFilter (key: String, minValue: number, maxValue: number) {
    var rangeFilters = this.rangeFiltersSource.value;
    var updateMade = false;
    for (var filterCounter = 0; filterCounter < rangeFilters.length && !updateMade; filterCounter++) { // Can be optimized in a number of ways. such as making the index the key of the range filter
      var filter = rangeFilters[filterCounter];
      if (key == filter.key) {
        // Update values
        filter.minValue = minValue;
        filter.maxValue = maxValue;
        // console.log(key + " updated");
      }
    }
    this.rangeFiltersSource.next(rangeFilters); // The rangeFilters object was updated in the code above
  }

  generateRangeFilters (): Array<RangeFilter> {
    var rangeFilters = [];
    var complementFilter = new RangeFilter('complement', 0, 5000, '#complement-range', 0, 5000);
    rangeFilters.push(complementFilter);

    return rangeFilters;
  }

  toggleAddShip (newState: boolean) {
    this.addShipSource.next(newState);
  }
}

export class RangeFilter {
  key: string;
  minValue: number;
  maxValue: number;
  idInDom: string;
  displayMin: number;
  displayMax: number;
  constructor (filterKey, min, max, id, rangeMin, rangeMax) {
    this.key = filterKey;
    this.minValue = min;
    this.maxValue = max;
    this.idInDom = id;
    this.displayMin = rangeMin;
    this.displayMax = rangeMax;
  }
}
