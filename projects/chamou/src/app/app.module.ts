import {DEFAULT_CURRENCY_CODE, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgOptimizedImage, registerLocaleData, TitleCasePipe} from "@angular/common";
import localePt from '@angular/common/locales/pt';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NavbarButtonComponent} from "./components/navbar-button/navbar-button.component";
import {CategoriaButtonComponent} from './components/categoria-button/categoria-button.component';
import {NavbarMenuComponent} from './components/navbar-menu/navbar-menu.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {CategoriaRowComponent} from './components/categoria-row/categoria-row.component';
import {CardItemComponent} from './components/card-item/card-item.component';
import {BottomNavbarComponent} from './components/bottom-navbar/bottom-navbar.component';
import {ItemModalComponent} from './components/modals/item-modal/item-modal.component';
import {GenericModalComponent} from './components/modals/generic-modal/generic-modal.component';
import {CartItemComponent} from './components/cart-item/cart-item.component';
import {DefaultButtonComponent} from './components/default-button/default-button.component';
import {BannerPrecoTotalComponent} from './components/banner-preco-total/banner-preco-total.component';
import {BannerTempoEsperaComponent} from './components/banner-tempo-espera/banner-tempo-espera.component';
import {QuantitySelectorComponent} from './components/quantity-selector/quantity-selector.component';
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {GenericModalLayoutComponent} from './components/modals/generic-modal-layout/generic-modal-layout.component';
import {SingleButtonModalComponent} from './components/modals/single-button-modal/single-button-modal.component';
import {CarrinhoModalComponent} from './components/modals/carrinho-modal/carrinho-modal.component';
import {PriceTextModalComponent} from './components/modals/price-text-modal/price-text-modal.component';
import {AlertModalComponent} from './components/modals/alert-modal/alert-modal.component';
import {ComandaModalComponent} from './components/modals/comanda-modal/comanda-modal.component';
import {CardPedidoComponent} from './components/card-pedido/card-pedido.component';
import {ButtonTextModalComponent} from './components/modals/button-text-modal/button-text-modal.component';
import {AvaliacaoModalComponent} from './components/modals/avaliacao-modal/avaliacao-modal.component';
import {ReactiveFormsModule} from "@angular/forms";
import {StarRatingModule} from "angular-star-rating";
import {InfoModalComponent} from './components/modals/info-modal/info-modal.component';
import {GarcomModalComponent} from './components/modals/garcom-modal/garcom-modal.component';
import {MainPageComponent} from './components/pages/main-page/main-page.component';
import {LoadingPageComponent} from './components/pages/loading-page/loading-page.component';
import {ComandaNomeModalComponent} from './components/modals/comanda-nome-modal/comanda-nome-modal.component';
import {environment} from "../../../admin/src/environments/environment";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getStorage, provideStorage} from "@angular/fire/storage";

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
    QuantitySelectorComponent,
    GenericModalLayoutComponent,
    SingleButtonModalComponent,
    CarrinhoModalComponent,
    PriceTextModalComponent,
    AlertModalComponent,
    ComandaModalComponent,
    CardPedidoComponent,
    ButtonTextModalComponent,
    AvaliacaoModalComponent,
    InfoModalComponent,
    GarcomModalComponent,
    MainPageComponent,
    LoadingPageComponent,
    ComandaNomeModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    StarRatingModule.forRoot(),
    NgOptimizedImage,
  ],
  providers: [
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
    provideAnimationsAsync('animations'),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    TitleCasePipe
  ],
  bootstrap: [AppComponent],
  // entryComponents: [ItemModalComponent],
})
export class AppModule { }
