import { Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    let token = localStorage.getItem('token');
    if (token) {
      console.log('authentication check passed');
      return true;
    } else {
      console.log('Authentication check failed.');
      this.router.navigate(['auth', 'login']);
      return false;
    }
  }
}
