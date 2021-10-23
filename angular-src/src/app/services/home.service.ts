import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthservicesService } from './authservices.service';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  constructor(private auth:AuthservicesService,private http:HttpClient ) { }
  getCategories(){
    return this.http.get('http://localhost:8080/api/v1/categories')
  }
  getPlaces(categoryId:any){
    return this.http.get(`http://localhost:8080/api/v1/categories/${categoryId}/places`);
  }
  getPlace(categoryId:any,placeId:any){
    return this.http.get(`http://localhost:8080/api/v1/categories/${categoryId}/places/${placeId}`);
  }
  addtofav(favouriteId:any)
  {
    let headers = new HttpHeaders();
    const token = this.auth.loadToken();
    console.log(token);
    headers = headers.append('Authorization',token || '');
    headers = headers.append('Content-Type','applicaton/json');
    return this.http.post('http://localhost:8080/api/v1/users/favourites',{favouriteId:favouriteId} ,{headers:headers}).pipe(map((res:any) => res));
  }
  GetallReviews(placeId:any)
  {
    return this.http.get(`http://localhost:8080/api/v1/places/${placeId}/reviews`);
  }
}
