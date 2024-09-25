import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./components/pages/login-page/login-page.component";
import {DefaultPageLayoutComponent} from "./components/page-layout/default-page-layout/default-page-layout.component";
import {ItensPageComponent} from "./components/pages/itens-page/itens-page.component";
import {CategoriasPageComponent} from "./components/pages/categorias-page/categorias-page.component";
import {MesasPageComponent} from "./components/pages/mesas-page/mesas-page.component";
import {ComandasPageComponent} from "./components/pages/comandas-page/comandas-page.component";
import {PedidosPageComponent} from "./components/pages/pedidos-page/pedidos-page.component";
import {AvaliacoesPageComponent} from "./components/pages/avaliacoes-page/avaliacoes-page.component";
const routes: Routes = [
  {
    path: '',
    component: DefaultPageLayoutComponent,
    children: [
      {
        path: 'itens',
        component: ItensPageComponent,
      },
      {
        path: 'categorias',
        component: CategoriasPageComponent,
      },
      {
        path: 'mesas',
        component: MesasPageComponent,
      },
      {
        path: 'comandas',
        component: ComandasPageComponent,
      },
      {
        path: 'pedidos',
        component: PedidosPageComponent,
      },
      {
        path: 'avaliacoes',
        component: AvaliacoesPageComponent,
      }
    ]
  },
  { path: 'login', component: LoginPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
