import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-armament-list',
  templateUrl: './app.armament-list.html',
  styleUrls: ['./armament-list-styles.css']
})
export class ArmamentListComponent {
  @Input('armament-object') armament: any;
}
