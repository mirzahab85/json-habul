import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { catchError, of, throwError } from 'rxjs';
import { AuthService, ICredentials, IUserLogin } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public loginFormGroup: FormGroup = new FormBuilder().group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
  })

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {

    const token = localStorage.getItem('token');
    console.log(token);
    if(token) {
      this.authService.isAuth = true;
      this.router.navigate(['/']);
    }

    // console.log(this.loginFormGroup.value);
    this.loginFormGroup.valueChanges.subscribe((value: any) => {
      // console.log(value);
    });

    this.router.events.subscribe((event) => {
      if (typeof NavigationEnd) {
        // console.log(event);
      }
    });
  }

  public submit(): void {
    if (this.loginFormGroup.invalid) {
      return;
    }
    // console.log(this.loginFormGroup.invalid);

    const credentials: ICredentials = this.loginFormGroup.value;

    this.authService.loginByPasswordAndUsername(credentials)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return of(new Error('poruka o error'));
        })
      )
      .subscribe((userLoginData: IUserLogin) => {
        if (userLoginData) {
          console.log(userLoginData);
          this.authService.isAuth = true;
          this.router.navigate(['/']);
        } else {
          alert('nije dobar password');
        }
      })


    // poziv na server. da posalje username i password.
    // kad poziv zavrsi. onda navigate

  }

}
