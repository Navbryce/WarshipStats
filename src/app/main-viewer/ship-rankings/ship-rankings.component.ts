import { Component, Input } from '@angular/core';
import { convertDistance } from '../../misc-functions/ship-ranking-functions.functions'
@Component({
  selector: 'ship-rankings',
  templateUrl: './ship-rankings.component.html',
  styleUrls: ['./ship-rankings.component.css']
})
export class ShipRankings {
  @Input() ship: any

  convertDistance (distance: any): number {
    return convertDistance(distance)
  }
}
