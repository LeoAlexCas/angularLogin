import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserStateSelectors } from 'src/app/store/user/user.selectors';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private _store: Store
  ) {}

  canActivate(): boolean {
    if(this._store.selectSnapshot(UserStateSelectors.SelectUserState).token) {
      console.log(`Token exists in guard, is ${this._store.selectSnapshot(UserStateSelectors.SelectUserState).token}`)
      return true;
    }

    this.router.navigate(['/signin']);
    return false;
  }
  
}
 