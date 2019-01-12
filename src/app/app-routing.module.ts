import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './home/customer/customer.component';
import { NewSubscriptionComponent } from './home/new-subscription/new-subscription.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { InvoicesComponent } from './home/invoices/invoices.component';
import { ServicesComponent } from './home/services/services.component';
import { WeavesComponent } from './home/services/weaves/weaves.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'newSubscription', component: NewSubscriptionComponent },
      { path: 'invoices', component: InvoicesComponent },
      { path: 'services', component: ServicesComponent,
       children:[
        {path: '', component: WeavesComponent}
      ]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
