import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// import * as boats from '../../Data/boats.json';
import { HttpClient } from '@angular/common/http';
import { LoadScreenService } from '../utilities/load-screen/load-screen.service';
import {SearchService} from '../navbar/app.search-service'
import {RangeFilter} from '../navbar/app.search-service';
import * as configData from '../../../config.json';
const config = (<any>configData);

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {environment} from 'environments/environment';

// const ships: Array<any> = (<any>boats);
declare var initializeProductGallery: any;

@Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css'],
      animations: [
          trigger('dialogueState', [
            state('inactive', style({
                    transform: 'scale(1) translate(0, 100vh)',
                    opacity: '1',

            })),
            state('active',   style({
                  transform: 'scale(1)',
                  opacity: '1',

            })),
            transition('inactive => active', animate('200ms ease-in')),
            transition('active => inactive', animate('200ms ease-out'))
          ])
        ]
})
export class AppComponent implements OnInit{
  configObject = <any>config;
  title = 'Warship Website';
  shipsList = []; // Initially set in ngOnInit getShips function. Has filters applied to it
  allShipsList = []; // All the ships
  hasGottenShipsOnce = false; // The first time the web page gets the ships, will set to true
  selectedShip: any;
  searchEntry = ""; // Should probably change this so it gets its initial value from the searchService
  sortBy = "displayName"; // Should probably change this so it gets its initial value from the searchService
  sortOrder = 1; // Should probably change this so it gets its initial value from the searchService
  rangeFilters: Array<RangeFilter>; // Instantiated in constructor
  dialogueState = "inactive";

  // Inject searchService to share variables | and HTTP client to communicate with the backend
  constructor(private changeDetector: ChangeDetectorRef, private loadScreenService: LoadScreenService, private searchService: SearchService, private http: HttpClient) {
    this.rangeFilters = searchService.initialRangeFilters;
  }

  ngOnInit(): void {
    this.searchService.currentSearch.subscribe(searchEntry => { // Also called when initially subscribed, so no need to call getShips when the page first loads
      this.searchEntry = searchEntry
      this.getShips(searchEntry, this.sortBy, this.sortOrder, this.rangeFilters);
    });
    this.searchService.sortBy.subscribe(sortBy => { // Also called whe intially subscribed? Redudant
      this.sortBy = sortBy;
      this.getShips(this.searchEntry, sortBy, this.sortOrder, this.rangeFilters);
    });
    this.searchService.sortOrder.subscribe(sortOrder => { // Also called whe intially subscribed? Redudant
      this.sortOrder = sortOrder;
      this.getShips(this.searchEntry, this.sortBy, sortOrder, this.rangeFilters);
    });
    this.searchService.rangeFilters.subscribe(rangeFilters => {
      this.rangeFilters = rangeFilters;
      this.getShips(this.searchEntry, this.sortBy, this.sortOrder, rangeFilters);
    });
  }

  getShips(shipNeedle, sortBy, sortOrder, rangeFilters): void {
    // Start loading while getting ships

    var body = {
      shipName: "",
      numberOfShips: 500,
      sort: {
        sortBy: sortBy,
        sortOrder: sortOrder
      },
      filters: {
        shipNeedle: shipNeedle,
        rangeIntFilters: rangeFilters
      }
    }
    var fullIP = environment.apiURL;

    this.loadScreenService.activateLoadingWithReason("loading-ships");
    this.http.post(fullIP + '/ships/getShips', body).subscribe(data => {
      console.log(data);
      this.shipsList = <Array<any>> data;
      if (!this.hasGottenShipsOnce) {
        this.hasGottenShipsOnce = true;
        this.allShipsList = <Array<any>> data; // Unadulterated/unfiltered list of ships.
      }
      this.changeDetector.detectChanges(); // Updates variables because sometimes the filter changes are made through jquery
      this.loadScreenService.deactivateLoadingWithReason("loading-ships");

    });
  }

  getKeysArray(object: Object): Array<String>{
      var returnValue = [];
      try {
        returnValue = Object.keys(object);
      } catch (error) {
        // return value is already an empty array; keep it
      }
      return returnValue;
  }
  //Will return if the key is already being displayed. Really need to change from array of keys manually entered to something stored in the database by the scraper
  getsKeysNotInUse(ship: any): Array<String>{
    var allKeys = this.getKeysArray(ship);
    var  keysInUseArray = ["selectedtab", "armor", "armament", "importantdates", "physicalattributes", "pictures", "description", "_id", "name", "displayname", "configuration", "scrapeurl", "class", "type", "complement"];

    for (var keysInUseCounter = 0; keysInUseCounter < keysInUseArray.length; keysInUseCounter++){
        var keyInUse = keysInUseArray[keysInUseCounter];
        var keyRemoved = false;
        for (var keyCounter = 0; keyCounter < allKeys.length && !keyRemoved; keyCounter++){
            if (keyInUse == allKeys[keyCounter].toLowerCase()){
                allKeys.splice(keyCounter, 1)
                keyRemoved = true;
            }
        }
    }

    return allKeys;
  }
  selectShip(ship: any): void{
      var body = document.getElementsByTagName("body")[0];
      var nonDialogue = document.getElementsByClassName("not-dialogue");

      if(ship==null){
          body.style.overflowY = "visible";
          for(var domElement=0; domElement<nonDialogue.length; domElement++){
              var element = (<HTMLElement>nonDialogue[domElement]);
              element.style.transition = ("filter 500ms, transform 300ms"); //Speeds prevent seeing white border
              element.style.webkitFilter="blur(0px)";
              element.style.transform = "scale(1)";
          }
          this.dialogueState="inactive";
          this.changeDetector.detectChanges(); // Updates variables because sometimes the filter changes are made through jquery
          setTimeout(()=>{
              this.selectedShip=null;
              this.changeDetector.detectChanges(); // Updates variables because sometimes the filter changes are made through jquery

          }, 100);

      }else{
          //Sets the current tab to the previous tab unless there was no previous tab. Sets to null before loading in so the selectTab method actually triggers all the ngIfs
          var previouslySelectedTab;
          previouslySelectedTab=ship.selectedTab;
          ship.selectedTab=null;
          if(previouslySelectedTab==null){
              previouslySelectedTab=0;
          }

          this.selectedShip=ship;
          // console.log("Selected:" + JSON.stringify(ship));

          this.selectTab(previouslySelectedTab);

          body.style.overflowY= "hidden";
          this.dialogueState="inactive";
          this.changeDetector.detectChanges(); // Updates variables because sometimes the filter changes are made through jquery

          setTimeout(()=>{ /*For some reason the animation trigger wants a brief period between switching. */
              for(var domElement=0; domElement<nonDialogue.length; domElement++){
                  var element = (<HTMLElement>nonDialogue[domElement]);
                  element.style.transition = ("filter 300ms, transform 500ms"); //Speeds prevent seeing white border
                  element.style.webkitFilter="blur(2px)";
                  element.style.transform = "scale(1.02)";

              }
              this.dialogueState="active";
              this.changeDetector.detectChanges(); // Updates variables because sometimes the filter changes are made through jquery

          }, 0);
      }
  }

  selectTab(tabNumber: number): void{
      var oldTab = this.selectedShip.selectedTab;
      console.log(this.selectedShip.selectedTab + "; new number:" + tabNumber);

      if(tabNumber != oldTab){
          this.selectedShip.selectedTab = tabNumber; //Must be done the start so code below can modify dom of tab
      }
      this.changeDetector.detectChanges(); // Updates variables because sometimes the filter changes are made through jquery

      if(tabNumber != oldTab && tabNumber == 0){
          setTimeout(()=>{ /*For some reason the animation trigger wants a brief period between switching. */
            initializeProductGallery(); //Same as the animation trigger. I'm pretty sure this block runs asynch or something without the timeout
          }, 0);
      }
  }
  // Only call when switching from one ship view to another
  switchShips (newShip: any): void {
    this.selectShip(null);
    if (newShip != null) { // Just in case the new ship is null, no need to "switch" twice
      setTimeout(() => {
        this.selectShip(newShip);
      }, 400);
    }
  }



}
