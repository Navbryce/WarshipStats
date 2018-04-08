import { Component, Input } from '@angular/core';
import {capitalizeFirstLetter} from '../../misc-functions/formatting-functions';


@Component({
  selector: 'app-armament-list',
  templateUrl: './app.armament-list.html',
  styleUrls: ['./armament-list-styles.css']
})
export class ArmamentListComponent {
  @Input('armament-object') armament: any;

  formatString (value: string): string {
    value = capitalizeFirstLetter(value);
    return value;
  }
}
