import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewticketComponent } from './newticket/newticket.component';
import { SelectticketComponent } from './selectticket/selectticket.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'newticket', component: NewticketComponent},
  {path: 'selectticket', component: SelectticketComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,{enableTracing: false}),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
