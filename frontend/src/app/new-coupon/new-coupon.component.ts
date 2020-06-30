import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CouponService} from '../coupon.service';

@Component({
  selector: 'app-new-coupon',
  templateUrl: './new-coupon.component.html',
  styleUrls: ['./new-coupon.component.css']
})
export class NewCouponComponent implements OnInit {

  couponForm:FormGroup;
  coupon={
    percent:"",
    duration:"",
    months:"",
    }
    tempResponse;
 
  constructor(private router:Router,
    private fb: FormBuilder,private couponService : CouponService) { 

      this.couponForm = fb.group({
        'percent' : ['', [Validators.required]],
        'duration' : ['', [Validators.required]],
        'months' : ['', [Validators.required]]
      });

      



    }


    

  ngOnInit(): void {
  }
// convenience getter for easy access to form fields
get f() { return this.couponForm.controls; }

addCoupon(){

 this.coupon.percent = this.couponForm.value.percent;
 this.coupon.duration = this.couponForm.value.duration;
 this.coupon.months = this.couponForm.value.months;
 
 this.couponService.addCuopon(this.coupon).subscribe(res => {
 this.tempResponse = res;
 });

 this.router.navigateByUrl('/coupon');
 

}
}
