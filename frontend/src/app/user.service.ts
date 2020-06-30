import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  logInUser(data){
    return this.http.post('http://localhost:3000/user/signin', data); 
  }

  registerUser(data) {   
	  return this.http.post('http://localhost:3000/user/signup', data); 
  }

}
