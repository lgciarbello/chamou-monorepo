import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./components/pages/login-page/login-page.component";
import {DefaultPageLayoutComponent} from "./components/page-layout/default-page-layout/default-page-layout.component";
import {ItensPageComponent} from "./components/pages/itens/itens-page/itens-page.component";
import {CategoriasPageComponent} from "./components/pages/categorias/categorias-page/categorias-page.component";
import {MesasPageComponent} from "./components/pages/mesas/mesas-page/mesas-page.component";
import {ComandasPageComponent} from "./components/pages/comandas/comandas-page/comandas-page.component";
import {PedidosPageComponent} from "./components/pages/pedidos/pedidos-page/pedidos-page.component";
import {AvaliacoesPageComponent} from "./components/pages/avaliacoes/avaliacoes-page/avaliacoes-page.component";
import {ItensListComponent} from "./components/pages/itens/itens-list/itens-list.component";
import {AuthGuard} from "./guards/auth.guard";
import {LoginGuard} from "./guards/login.guard";
import {ItensInfoComponent} from "./components/pages/itens/itens-info/itens-info.component";
import {CategoriasListComponent} from "./components/pages/categorias/categorias-list/categorias-list.component";
import {CategoriasInfoComponent} from "./components/pages/categorias/categorias-info/categorias-info.component";
import {MesasListComponent} from "./components/pages/mesas/mesas-list/mesas-list.component";
import {MesasInfoComponent} from "./components/pages/mesas/mesas-info/mesas-info.component";
import {MesasEditComponent} from "./components/pages/mesas/mesas-edit/mesas-edit.component";
import {ComandasInfoComponent} from "./components/pages/comandas/comandas-info/comandas-info.component";
import {ComandasListComponent} from "./components/pages/comandas/comandas-list/comandas-list.component";
import {ComandasEditComponent} from "./components/pages/comandas/comandas-edit/comandas-edit.component";
import {ComandasHistoryComponent} from "./components/pages/comandas/comandas-history/comandas-history.component";
import {PedidosListComponent} from "./components/pages/pedidos/pedidos-list/pedidos-list.component";
import {PedidosEditComponent} from "./components/pages/pedidos/pedidos-edit/pedidos-edit.component";
import {PedidosInfoComponent} from "./components/pages/pedidos/pedidos-info/pedidos-info.component";
import {PedidosHistoryComponent} from "./components/pages/pedidos/pedidos-history/pedidos-history.component";
import {
  AvaliacoesDashboardComponent
} from "./components/pages/avaliacoes/avaliacoes-dashboard/avaliacoes-dashboard.component";
import {AvaliacoesInfoComponent} from "./components/pages/avaliacoes/avaliacoes-info/avaliacoes-info.component";
const routes: Routes = [
  {
    path: '',
    component: DefaultPageLayoutComponent,
    canActivate: [AuthGuard()],
    canActivateChild: [AuthGuard()],
    children: [
      {
        path: 'itens',
        component: ItensPageComponent,
        children: [
          {
            path: '',
            component: ItensListComponent
          },
          {
            path: 'item',
            component: ItensInfoComponent
          },
          {
            path: 'item/:id',
            component: ItensInfoComponent
          }
        ]
      },
      {
        path: 'categorias',
        component: CategoriasPageComponent,
        children: [
          {
            path: '',
            component: CategoriasListComponent
          },
          {
            path: 'categoria',
            component: CategoriasInfoComponent
          },
          {
            path: 'categoria/:id',
            component: CategoriasInfoComponent
          }
        ]
      },
      {
        path: 'mesas',
        component: MesasPageComponent,
        children: [
          {
            path: '',
            component: MesasListComponent
          },
          {
            path: 'mesa',
            component: MesasEditComponent
          },
          {
            path: 'mesa/:id',
            component: MesasInfoComponent
          },
          {
            path: 'mesa/:id/edit',
            component: MesasEditComponent
          }
        ]
      },
      {
        path: 'comandas',
        component: ComandasPageComponent,
        children: [
          {
            path: '',
            component: ComandasListComponent
          },
          {
            path: 'comanda',
            component: ComandasEditComponent
          },
          {
            path: 'comanda/:id',
            component: ComandasInfoComponent
          },
          {
            path: 'comanda/:id/edit',
            component: ComandasEditComponent
          },
          {
            path: 'historico',
            component: ComandasHistoryComponent
          },
          {
            path: 'historico/:id',
            component: ComandasInfoComponent
          }
        ]
      },
      {
        path: 'pedidos',
        component: PedidosPageComponent,
        children: [
          {
            path: '',
            component: PedidosListComponent
          },
          {
            path: 'pedido',
            component: PedidosEditComponent
          },
          {
            path: 'pedido/:id',
            component: PedidosInfoComponent
          },
          {
            path: 'pedido/:id/edit',
            component: PedidosEditComponent
          },
          {
            path: 'historico',
            component: PedidosHistoryComponent
          },
          {
            path: 'historico/:id',
            component: PedidosInfoComponent
          }
        ]
      },
      {
        path: 'avaliacoes',
        component: AvaliacoesPageComponent,
        children: [
          {
            path: '',
            component: AvaliacoesDashboardComponent
          },
          {
            path: 'avaliacao/:id',
            component: AvaliacoesInfoComponent
          }
        ]
      }
    ]
  },
  { path: 'login', component: LoginPageComponent, canActivate: [LoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
