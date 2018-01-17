import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ShipCreationComponent } from './app.ship-creation.component';
import { NavbarComponent } from './app.navbar.component';
import { SearchService } from './app.search-service'
import {PlaceHolderDirective} from './app.ship-creation-placeholder.directive'



@NgModule({
  declarations: [
    AppComponent,
    ShipCreationComponent,
    NavbarComponent,
    PlaceHolderDirective
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
