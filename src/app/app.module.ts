import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import {MdSidenavModule} from '@angular/material';
import {AppRoutingModule} from "./app.routing.module";
import {LoginModule} from "./login/login.module";
import {ProjectModule} from "./project/project.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdSidenavModule,
    LoginModule,
    ProjectModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
