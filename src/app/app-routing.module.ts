import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { AddOrderComponent } from './components/order/add-order/add-order.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: OrderComponent, canActivate: [AuthGuard] },
  { path: 'orders/new', component: AddOrderComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
