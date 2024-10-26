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
import { CategoriasPageComponent } from './components/pages/categorias/categorias-page/categorias-page.component';
import { MesasPageComponent } from './components/pages/mesas/mesas-page/mesas-page.component';
import { ComandasPageComponent } from './components/pages/comandas-page/comandas-page.component';
import { PedidosPageComponent } from './components/pages/pedidos-page/pedidos-page.component';
import { AvaliacoesPageComponent } from './components/pages/avaliacoes-page/avaliacoes-page.component';
import { ItemCardComponent } from './components/cards/item-card/item-card.component';
import { ItensListComponent } from './components/pages/itens/itens-list/itens-list.component';
import {NgOptimizedImage, registerLocaleData} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { ItensInfoComponent } from './components/pages/itens/itens-info/itens-info.component';
import { DefaultInfoPageComponent } from './components/pages/default-info-page/default-info-page.component';
import {NgxCurrencyDirective} from "ngx-currency";
import {NgSelectModule} from "@ng-select/ng-select";
import { CategoriasListComponent } from './components/pages/categorias/categorias-list/categorias-list.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import { CategoriasInfoComponent } from './components/pages/categorias/categorias-info/categorias-info.component';
import { MesasListComponent } from './components/pages/mesas/mesas-list/mesas-list.component';
import { MesaCardComponent } from './components/cards/mesa-card/mesa-card.component';
import { MesasInfoComponent } from './components/pages/mesas/mesas-info/mesas-info.component';
import { MesasEditComponent } from './components/pages/mesas/mesas-edit/mesas-edit.component';
import {QRCodeModule} from "angularx-qrcode";
import { MesaComandaCardComponent } from './components/cards/mesa-comanda-card/mesa-comanda-card.component';

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
    ItensListComponent,
    ItensInfoComponent,
    DefaultInfoPageComponent,
    CategoriasListComponent,
    CategoriasInfoComponent,
    MesasListComponent,
    MesaCardComponent,
    MesasInfoComponent,
    MesasEditComponent,
    MesaComandaCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FaIconComponent,
    HttpClientModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    NgxCurrencyDirective,
    NgSelectModule,
    DragDropModule,
    QRCodeModule
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
