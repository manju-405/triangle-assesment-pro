import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../../_services/registration.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registarionForm: FormGroup
  isError: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registrationService: RegistrationService,
  ) {
    this.registarionForm = formBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: [''],
      display: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nickName: [''],
      website: [''],
      bio: [''],
      jabber: [''],
      aolim: [''],
      yahooim: [''],
    })
  }

  ngOnInit() {
  }

  formSubmit = () => {
    if (this.registarionForm.valid) {
      const control = this.registarionForm.controls;
      const postData = {
        username: control.userName.value,
        email: control.email.value,
        password: control.password.value,
        display: control.display.value,
        firstname: control.firstName.value,
        lastname: control.lastName.value,
        website: control.website.value,
        bio: control.bio.value,
        jabber: control.jabber.value,
        aolim: control.aolim.value,
        yahooim: control.yahooim.value,
      };
      this.registrationService.postUsersData(postData)
        .then(data => {
          console.log(data, 'post data')
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
