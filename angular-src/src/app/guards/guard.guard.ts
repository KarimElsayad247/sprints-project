import { AuthservicesService } from './../services/authservices.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree , Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private auth:AuthservicesService , private router:Router){}
  canActivate(){
    if(this.auth.loggedIn())
    { 
      return true;
    }
    else
    {
      this.router.navigate(['/auth']);
      return false
    }
  }
}
