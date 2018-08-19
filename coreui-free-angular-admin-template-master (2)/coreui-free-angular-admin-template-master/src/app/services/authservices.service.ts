import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import{Route,Router,NavigationStart, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import { CanActivate} from '@angular/router/src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {
    return true;;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

}

