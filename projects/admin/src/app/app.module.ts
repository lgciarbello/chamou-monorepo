import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavSidebarComponent } from './components/nav-sidebar/nav-sidebar.component';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { DefaultPageLayoutComponent } from './components/page-layout/default-page-layout/default-page-layout.component';
import { DefaultContentPageComponent } from './components/page-layout/default-content-page/default-content-page.component';
import { ItensPageComponent } from './components/pages/itens-page/itens-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavSidebarComponent,
    SidebarItemComponent,
    // LoginPageComponent,
    DefaultPageLayoutComponent,
    DefaultContentPageComponent,
    // ItensPageComponent
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
