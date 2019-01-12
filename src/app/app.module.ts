import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GridComponent } from './grid/grid.component';
import { CustomerComponent } from './home/customer/customer.component';
import { NewSubscriptionComponent } from './home/new-subscription/new-subscription.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { InvoicesComponent } from './home/invoices/invoices.component';
import { ServicesComponent } from './home/services/services.component';
import { WeavesComponent } from './home/services/weaves/weaves.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    GridComponent,
    CustomerComponent,
    NewSubscriptionComponent,
    DashboardComponent,
    InvoicesComponent,
    ServicesComponent,
    WeavesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
