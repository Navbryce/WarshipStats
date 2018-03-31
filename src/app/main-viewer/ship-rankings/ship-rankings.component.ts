import { Component, EventEmitter, Input, Output } from '@angular/core';
import { convertDistance } from '../../misc-functions/ship-ranking-functions.functions'
import { arrayToMap } from '../../misc-functions/ships-functions.functions'
@Component({
  selector: 'ship-rankings',
  templateUrl: './ship-rankings.component.html',
  styleUrls: ['./ship-rankings.component.css']
})
export class ShipRankings {
  @Input() ship: any;
  @Input() allShips: any;
  @Output() selectShip = new EventEmitter<any>();

  allShipsMap: any;

  ngOnChanges () {
    this.allShipsMap = arrayToMap(this.allShips); // Converts the allShips list to a map, so that way information on each ship can be easily acccessed in the rankings list
  }

  convertDistance (distance: any): number {
    return convertDistance(distance);
  }

  inMap (scrapeURL: string): boolean {
    var inMap;
    this.allShipsMap[scrapeURL] != null ? inMap = true: (console.log("ERROR: " + scrapeURL + " is not in the allShipsMap. This shouldn't be the case."), inMap=false);
    return inMap;
  }

  switchShip (ship: any): void { // Switch the ship being viewed
    this.selectShip.emit(ship);
  }
}
