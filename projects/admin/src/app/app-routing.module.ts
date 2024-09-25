import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./components/pages/login-page/login-page.component";
import {DefaultPageLayoutComponent} from "./components/page-layout/default-page-layout/default-page-layout.component";
const routes: Routes = [
  {
    path: '',
    component: DefaultPageLayoutComponent,
  },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
