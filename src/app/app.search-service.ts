import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

//Used to share data between the two SIBLING (unrelated) components: navbar and ship-creation


@Injectable()
export class SearchService {
  private searchEntrySource = new BehaviorSubject<string>("");
  currentSearch = this.searchEntrySource.asObservable(); // Gets the value of the searchEntrySource object as a dyanimc variable

  constructor() { }
  changeSearch(newSearch: string) {
    this.searchEntrySource.next(newSearch)
  }
}
