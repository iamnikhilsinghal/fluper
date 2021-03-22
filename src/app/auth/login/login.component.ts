import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    this.router.navigate(['dashboard']);
    // this.authService
    //   .login({
    //     email: 'nikhil@22march.com',
    //     password: 'password',
    //   })
    //   .subscribe((resp) => {
    //     if (resp.token) {
    //       localStorage.setItem('token', resp.token);
    //       this.router.navigate(['dashboard']);
    //     }
    //   });
  }
}
