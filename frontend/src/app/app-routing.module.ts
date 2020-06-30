import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CouponComponent} from './coupon/coupon.component';


const routes: Routes = [
   { path: '', redirectTo: 'coupon', pathMatch: 'full' },
{ path: 'coupon', component: CouponComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
