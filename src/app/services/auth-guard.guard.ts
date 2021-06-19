import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthGuardGuard implements CanActivate {

  constructor(
    private router: Router,
  ) { }

  storage: Storage = localStorage;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // intercepta uma requisição por meio de uma rotas
    if (!this.storage.getItem('usuario')) {
      return this.router.parseUrl('/login');
    } else {
      return true;
    }

  }
}

