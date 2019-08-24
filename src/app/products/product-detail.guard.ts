import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()

export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let id = +next.url[1].path;
      if(isNaN(id) || (id !== 1 && id !== 2 && id !== 5 && id !== 8 && id !== 10 )) {
        alert('Invalid Product Id');
        this.router.navigate(['/products']);
        return false;
      };
      return true;
  }
  
}
