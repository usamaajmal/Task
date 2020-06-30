import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CouponComponent} from './coupon/coupon.component';
import {NewCouponComponent} from './new-coupon/new-coupon.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
   { path: '', redirectTo: 'coupon', pathMatch: 'full' },
{ path: 'coupon', component: CouponComponent},
{ path: 'coupon/add', component: NewCouponComponent},
{ path: 'login', component: LoginComponent},
{ path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
