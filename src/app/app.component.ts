import { Component, OnInit } from '@angular/core';
// import * as boats from '../../Data/boats.json';
import { HttpClient } from '@angular/common/http';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

// const ships: Array<any> = (<any>boats);
declare var initializeProductGallery: any;

@Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
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
  title = 'Warship Website';
  shipsList = []; // Initially set in ngOnInit getShips function
  selectedShip: any;
  dialogueState = "inactive";
  test: Array<String>;

  // Inject HttpClient so it can be used
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getShips();
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
          setTimeout(()=>{
              this.selectedShip=ship;
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
          this.selectTab(previouslySelectedTab);
          body.style.overflowY= "hidden";
          this.dialogueState="inactive";
          setTimeout(()=>{ /*For some reason the animation trigger wants a brief period between switching. */
              for(var domElement=0; domElement<nonDialogue.length; domElement++){
                  var element = (<HTMLElement>nonDialogue[domElement]);
                  element.style.transition = ("filter 300ms, transform 500ms"); //Speeds prevent seeing white border
                  element.style.webkitFilter="blur(2px)";
                  element.style.transform = "scale(1.02)";

              }
              this.dialogueState="active";
          }, 0);
      }
  }
  getKeysArray(object: Object): Array<String>{
      return Object.keys(object);
  }
  //Will return if the key is already being displayed. Really need to change from array of keys manually entered to something stored in the database by the scraper
  getsKeysNotInUse(ship: any): Array<String>{
    var allKeys = this.getKeysArray(ship);
    var  keysInUseArray = ["selectedTab", "armor", "armament", "importantDates", "physicalAttributes", "pictures", "description", "ID", "name", "displayName", "configuration", "scrapeURL"];

    for (var keysInUseCounter = 0; keysInUseCounter < keysInUseArray.length; keysInUseCounter++){
        var keyInUse = keysInUseArray[keysInUseCounter];
        var keyRemoved = false;
        for (var keyCounter = 0; keyCounter < allKeys.length && !keyRemoved; keyCounter++){
            if (keyInUse == allKeys[keyCounter]){
                allKeys.splice(keyCounter, 1)
                keyRemoved = true;
            }
        }
    }

    return allKeys;
  }
  selectTab(tabNumber: number): void{
      console.log(this.selectedShip.selectedTab + "; new number:" + tabNumber);

      if(tabNumber!=this.selectedShip.selectedTab){
          setTimeout(()=>{ /*For some reason the animation trigger wants a brief period between switching. */
              initializeProductGallery(); //Same as the animation trigger. I'm pretty sure this block runs asynch or something without the timeout
          }, 0);
      }
      if(tabNumber!=this.selectedShip.selectedTab){
          this.selectedShip.selectedTab=tabNumber; //Must be done the start so code below can modify dom of tab
      }
  }
  getShips(): void {
    var body = {
      shipName: "",
      numberOfShips: 500
    }
    this.http.post('http://192.168.1.2:3000/ships/getShips', body).subscribe(data => {
      console.log(data);
      this.shipsList = this.shipsList.concat(data);
      this.test = this.getKeysArray(this.shipsList[0].physicalAttributes);
    });
  }

}
