import { Component } from '@angular/core';
import * as boats from '../../Data/boats.json';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

const ships: Array<Ship> = (<any>boats).boats;

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
  selectedShip: Ship;

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
          this.selectedShip=ship;
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
  dialogueState = "inactive";


}
export class Ship {
    id: number;
    name: string;
    weaponSystems: Array<Weapon>;
    thumbnail: string;
}
export class Weapon{
    id: number;
    name: string;
    quantity: number;
}
