import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {
  authtoken:any;

  
  constructor(private http :HttpClient ) { }
  registerUser(user:any){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type','applicaton/json');
    return this.http.post('http://localhost:8080/api/v1/auth/register',user, {headers:headers}).pipe(map((res:any) => res)); 
  }
  getAllDisabilities(){
    return this.http.get('http://localhost:8080/api/v1/disabilities');
  }

  getcurrentUser()
  {
    let header = new HttpHeaders();
    this.loadToken();
    console.log(this.authtoken)
    header= header.append('Authorization',this.authtoken);
    header= header.append('Content-Type','applicaton/json');
    console.log(header)
    return this.http.get('http://localhost:8080/api/v1/auth/me',{headers:header}).pipe(map((res:any)=>res));
  }
  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authtoken = token;
    return token
  }
  authenticateUser(user:any)
  { 
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type','applicaton/json');
    return this.http.post('http://localhost:8080/api/v1/auth/login',user, {headers:headers}).pipe(map((res:any) => res)); 
  
  } 
  storeUserData(token:any){
    let tokenNew = 'Bearer '+ token; 
    localStorage.setItem('id_token',tokenNew);
    this.authtoken = token;
    // localStorage.setItem('user',JSON.stringify(currentUser.data));
    // this.authtoken = token;
  }
  logout(){
    this.authtoken = null;
    localStorage.clear();
  }
  loggedIn(){
    const helper = new JwtHelperService();
    return helper.isTokenExpired(this.authtoken);
  }
}
