import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http: HttpClient) { }

  getCoupons() {   
    return this.http.get('http://localhost:3000/coupan');  
  }
  
  deleteCoupon(couponId){
    return this.http.delete('http://localhost:3000/coupan/'+couponId);
  }
  addCuopon(data){
    return this.http.post('http://localhost:3000/coupan/add', data); 
  }
}
