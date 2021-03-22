import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { API_URL } from '../Config';

export interface User {
  firstName: string;
  lastName: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  userUpdated = new BehaviorSubject<User>({ firstName: '', lastName: '' });

  constructor(private router: Router, private http: HttpClient) {
    let user: any = JSON.parse(localStorage.getItem('user') || '{}');

    if (user) {
      this.userUpdated.next(user);
    } else {
      this.userUpdated.next({ firstName: 'DemoFirst', lastName: 'DemoLast' });
    }
  }

  login({ email = '', password = '' }): Observable<any> {
    return this.http.post(`${API_URL}/auth/login`, {
      email: email,
      password: password,
    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.userUpdated.next({ firstName: '', lastName: '' });
    this.router.navigate(['auth', 'login']);
  }
}
