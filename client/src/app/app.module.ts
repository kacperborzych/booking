import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SecurityModule} from './security/security.module';
import {UsersModule} from './users/users.module';
import {Api} from './api';
import {SecurityGuard} from './security/security.guard';
import {SecurityService} from './security/security.service';
import {routerModule} from './app.routing';
import {HotelModule} from "./hotel/hotel.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    SecurityModule,
    UsersModule,
    routerModule,
    HotelModule
  ],
  providers: [
    Api,
    SecurityService,
    SecurityGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
