import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CouponComponent } from './coupon/coupon.component';
import { NewCouponComponent } from './new-coupon/new-coupon.component';
import { FormsModule, ReactiveFormsModule , FormGroup, FormControl, FormBuilder  } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CouponComponent,
    NewCouponComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
