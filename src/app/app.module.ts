import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NavbarButtonComponent} from "./navbar-button/navbar-button.component";
import { CategoriaButtonComponent } from './categoria-button/categoria-button.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CategoriaRowComponent } from './categoria-row/categoria-row.component';
import { CardItemComponent } from './card-item/card-item.component';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';
import { ItemModalComponent } from './item-modal/item-modal.component';
import { GenericModalComponent } from './generic-modal/generic-modal.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarButtonComponent,
    CategoriaButtonComponent,
    NavbarMenuComponent,
    NavbarComponent,
    SearchBarComponent,
    CategoriaRowComponent,
    CardItemComponent,
    BottomNavbarComponent,
    ItemModalComponent,
    GenericModalComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
