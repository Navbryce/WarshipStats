import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './main-viewer/app.component';
import { ShipCreationComponent } from './ship-creation/app.ship-creation.component';
import { NavbarComponent } from './navbar/app.navbar.component';
import { SearchService } from './navbar/app.search-service'
import {ErrorVisibleDirective} from './app.error-visible.directive'
import {PlaceHolderDirective} from './ship-creation/app.ship-creation-placeholder.directive'
import {CreateShipValidator} from './app.create-validation.directive'
import {ArmamentListComponent} from './main-viewer/armament-list/app.armament-list.component'
import {ShipGraphComponent} from './main-viewer/ship-graph/ship-graph.component'

@NgModule({
  declarations: [
    AppComponent,
    ShipCreationComponent,
    NavbarComponent,
    PlaceHolderDirective,
    ErrorVisibleDirective,
    CreateShipValidator,
    ArmamentListComponent,
    ShipGraphComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent, ShipCreationComponent, NavbarComponent]
})
export class AppModule { }
