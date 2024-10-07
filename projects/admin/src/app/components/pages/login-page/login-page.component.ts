import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../services/authentication.service";
import {Router} from "@angular/router";
import {AuthenticationRequest} from "../../../interfaces/authentication-request.interface";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private readonly authenticationService: AuthenticationService,
              private readonly _router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const authenticationRequest: AuthenticationRequest = {
      username: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this.authenticationService.login(authenticationRequest).subscribe({
      next: () => {
        this._router.navigate(['/']);
      },
      error: (error) => {
        console.log(error.status);
        //TODO disparar toast
      }
    })
  }
}
