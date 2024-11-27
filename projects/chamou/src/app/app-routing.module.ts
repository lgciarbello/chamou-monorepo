import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoadingPageComponent} from "./components/pages/loading-page/loading-page.component";
import {MainPageComponent} from "./components/pages/main-page/main-page.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'mesa',
    component: LoadingPageComponent,
  },
  {
    path: 'mesa/:id',
    component: LoadingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
