import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { localStroageService } from '../service/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private localstorageservice: localStroageService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const loggedUserEmail = this.localstorageservice.getValueFromLocalStorage('loggedUser');
      const atIndex = loggedUserEmail?.indexOf('@');
      
      if(loggedUserEmail?.substring(0, atIndex) === 'admin'){
        return true;
      }

      this.router.navigate(['/home']);
      return false;
  }
  
}
