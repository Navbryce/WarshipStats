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

      if(ship==null){
          body.style.overflowY = "visible";
          this.dialogueState="inactive";
          setTimeout(()=>{
              this.selectedShip=ship;
          }, 100);

      }else{
          this.selectedShip=ship;

          body.style.overflowY= "hidden";
          this.dialogueState="inactive";
          setTimeout(()=>{ /*For some reason the animation trigger wants a brief period between switching. */
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
