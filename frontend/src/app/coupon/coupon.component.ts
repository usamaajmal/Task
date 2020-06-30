import { Component, OnInit } from '@angular/core';
import {CouponService} from '../coupon.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  
  coupons;
  couponsError=false;
  
  constructor(private couponService : CouponService, private router:Router) {
    
      this.couponService.getCoupons().subscribe( res => {
        this.coupons = res;
        if(this.coupons.length == 0)
         this.couponsError=true;
        }, err => {
        console.log("Error " + err);
      });  
    }

    deleteCoupon(couponId){
      console.log(couponId)
      this.couponService.deleteCoupon(couponId).subscribe(res=>{
        console.log(res);
        
      });

      this.router.navigate(["/coupon"]);
     
    }

  ngOnInit(): void {
  }

}
