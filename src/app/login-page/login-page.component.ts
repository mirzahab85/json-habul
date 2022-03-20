import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

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
    // console.log(this.loginFormGroup.value);
    this.loginFormGroup.valueChanges.subscribe((value: any) => {
      console.log(value);
    });

    this.router.events.subscribe((event) => {
      if (typeof NavigationEnd) {
        console.log(event);
      }
    });
  }

  public submit(): void {
    if(this.loginFormGroup.invalid) {
      return;
    }
    console.log(this.loginFormGroup.invalid);
    this.authService.isAuth = true;
    this.router.navigate(['/']);

    // poziv na server. da posalje username i password.
    // kad poziv zavrsi. onda navigate

  }

}
