import {DEFAULT_CURRENCY_CODE, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from "@angular/common";
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarButtonComponent } from "./navbar-button/navbar-button.component";
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
import { DefaultButtonComponent } from './default-button/default-button.component';
import { BannerPrecoTotalComponent } from './banner-preco-total/banner-preco-total.component';
import { BannerTempoEsperaComponent } from './banner-tempo-espera/banner-tempo-espera.component';
import { QuantitySelectorComponent } from './quantity-selector/quantity-selector.component';

registerLocaleData(localePt, 'pt-BR');

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
    CartItemComponent,
    DefaultButtonComponent,
    BannerPrecoTotalComponent,
    BannerTempoEsperaComponent,
    QuantitySelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
