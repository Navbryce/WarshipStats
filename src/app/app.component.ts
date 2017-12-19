import { Component } from '@angular/core';
import * as boats from '../../Data/boats.json';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

const ships: Array<any> = (<any>boats);
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
export class AppComponent {
  title = 'Warship Website';
  shipsList = ships;
  selectedShip: any;
  dialogueState = "inactive";

  selectShip(ship: Ship): void{

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
      var keys = Object.keys(object);
      return keys;
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


}
export class Ship {
    id: number;
    name: string;
    weaponSystems: Array<Weapon>;
    thumbnail: string;
    selectedTab: number; //Only for selected ship
}
export class Weapon{
    id: number;
    name: string;
    quantity: number;
}
