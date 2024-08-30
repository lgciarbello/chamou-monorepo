import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavSidebarComponent } from './components/nav-sidebar/nav-sidebar.component';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavSidebarComponent,
    SidebarItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FaIconComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
