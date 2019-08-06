import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Angular2TokenService, A2tUiModule  } from 'angular2-token';
import {AuthService} from "./services/auth.service";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { ProductsService } from './services/products.service';
import { FilterPipe } from './pipes/filter.pipe';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrderComponent } from './components/order/order.component';
import { AddOrderComponent } from './components/order/add-order/add-order.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    NavbarComponent,
    FilterPipe,
    DashboardComponent,
    OrderComponent,
    AddOrderComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    A2tUiModule
  ],
  providers: [AuthGuard, Angular2TokenService, AuthService, ProductsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
