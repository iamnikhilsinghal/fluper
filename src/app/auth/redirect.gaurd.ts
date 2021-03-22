import { Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RedirectGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    let token = localStorage.getItem('token');
    if (token) {
      console.log('authentication check passed');
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
