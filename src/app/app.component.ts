import { Component } from '@angular/core';
import * as boats from '../../Data/boats.json';

const ships: Array<Ship> = (<any>boats).boats;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Warship Website';
  shipsList = ships;
  selectedShip: Ship;

  selectShip(ship: Ship): void{
      this.selectedShip=ship;
  }
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
