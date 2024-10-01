import {DEFAULT_CURRENCY_CODE, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavSidebarComponent } from './components/nav-sidebar/nav-sidebar.component';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { DefaultPageLayoutComponent } from './components/page-layout/default-page-layout/default-page-layout.component';
import { DefaultContentPageComponent } from './components/page-layout/default-content-page/default-content-page.component';
import { ItensPageComponent } from './components/pages/itens/itens-page/itens-page.component';
import { CategoriasPageComponent } from './components/pages/categorias-page/categorias-page.component';
import { MesasPageComponent } from './components/pages/mesas-page/mesas-page.component';
import { ComandasPageComponent } from './components/pages/comandas-page/comandas-page.component';
import { PedidosPageComponent } from './components/pages/pedidos-page/pedidos-page.component';
import { AvaliacoesPageComponent } from './components/pages/avaliacoes-page/avaliacoes-page.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItensListComponent } from './components/pages/itens/itens-list/itens-list.component';
import {NgOptimizedImage, registerLocaleData} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    NavSidebarComponent,
    SidebarItemComponent,
    LoginPageComponent,
    DefaultPageLayoutComponent,
    DefaultContentPageComponent,
    ItensPageComponent,
    CategoriasPageComponent,
    MesasPageComponent,
    ComandasPageComponent,
    PedidosPageComponent,
    AvaliacoesPageComponent,
    ItemCardComponent,
    ItensListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FaIconComponent,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
