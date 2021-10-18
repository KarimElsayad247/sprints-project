import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {
  authtoken:any;
  user:any;
  
  constructor(private http :HttpClient ) { }
  registerUser(user:any){
    let headers = new HttpHeaders();
    headers.append('Content-Type','applicaton/json');
    return this.http.post('http://localhost:8080/api/v1/auth/register',user, {headers:headers}).pipe(map((res:any) => res)); 
  }
 
  authenticateUser(user:any)
  { 
    let headers = new HttpHeaders();
    headers.append('Content-Type','applicaton/json');
    return this.http.post('http://localhost:8080/api/v1/auth/login',user, {headers:headers}).pipe(map((res:any) => res)); 
  
  } 
  storeUserData(token:any,user:any){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authtoken = token;
    this.user = user;
  }
}
