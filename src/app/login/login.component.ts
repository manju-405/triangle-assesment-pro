import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isError: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registrationService: RegistrationService,
  ) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  ngOnInit() {
  }
  userLogin = () => {
    if (this.loginForm.valid) {
      const control = this.loginForm.controls;
      this.registrationService.findUser(control.email.value,control.password.value)
        .then((data: any) => {
          console.log(data, 'post data');
          localStorage.setItem('username', data.username);
          localStorage.setItem('email', data.email);
          this.router.navigate(["home"]);
          this.isError = false;
        }).catch(error => {
          console.log(error, 'Error in posting')
          this.isError = true;
        })
    } else {
      this.isError = true;
    }
  }
}
