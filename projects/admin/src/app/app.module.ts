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
import { ComandasPageComponent } from './components/pages/comandas/comandas-page/comandas-page.component';
import { PedidosPageComponent } from './components/pages/pedidos/pedidos-page/pedidos-page.component';
import { AvaliacoesPageComponent } from './components/pages/avaliacoes/avaliacoes-page/avaliacoes-page.component';
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
import { ComandasListComponent } from './components/pages/comandas/comandas-list/comandas-list.component';
import { ComandasInfoComponent } from './components/pages/comandas/comandas-info/comandas-info.component';
import { ComandasEditComponent } from './components/pages/comandas/comandas-edit/comandas-edit.component';
import { PedidoCardComponent } from './components/cards/pedido-card/pedido-card.component';
import { ComandasHistoryComponent } from './components/pages/comandas/comandas-history/comandas-history.component';
import { PedidosListComponent } from './components/pages/pedidos/pedidos-list/pedidos-list.component';
import { PedidosEditComponent } from './components/pages/pedidos/pedidos-edit/pedidos-edit.component';
import { PedidosInfoComponent } from './components/pages/pedidos/pedidos-info/pedidos-info.component';
import { PedidosHistoryComponent } from './components/pages/pedidos/pedidos-history/pedidos-history.component';
import { ItemCreateCardComponent } from './components/cards/item-create-card/item-create-card.component';
import { PedidoItemCardComponent } from './components/cards/pedido-item-card/pedido-item-card.component';
import { AvaliacoesDashboardComponent } from './components/pages/avaliacoes/avaliacoes-dashboard/avaliacoes-dashboard.component';
import {StarRatingModule} from "angular-star-rating";
import { AvaliacoesInfoComponent } from './components/pages/avaliacoes/avaliacoes-info/avaliacoes-info.component';

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
    MesaComandaCardComponent,
    ComandasListComponent,
    ComandasInfoComponent,
    ComandasEditComponent,
    PedidoCardComponent,
    ComandasHistoryComponent,
    PedidosListComponent,
    PedidosEditComponent,
    PedidosInfoComponent,
    PedidosHistoryComponent,
    ItemCreateCardComponent,
    PedidoItemCardComponent,
    AvaliacoesDashboardComponent,
    AvaliacoesInfoComponent
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
    QRCodeModule,
    StarRatingModule.forRoot()
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
