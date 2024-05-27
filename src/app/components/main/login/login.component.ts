import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { user } from '../../interface/user.interface';
import { localStroageService } from '../../service/localstorage.service';
import { FormService } from '../../service/form.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  emailStatus: string = '';
  passwordStatus: string = '';
  loggedUser: user = {
    email: '',
    password: ''
  };
  loginForm!: FormGroup;


  constructor(private localstorage: localStroageService, private formService: FormService, private router: Router){}

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email, this.formService.forbiddenCharacter.bind(this)]), // Apply required and email validators
      'password': new FormControl(null, [Validators.required, this.formService.forbiddenCharacter.bind(this)]) // Apply required validator
    });
  }

  onSubmit() {
    this.loggedUser.email = this.loginForm.value.email;
    this.loggedUser.password = this.loginForm.value.password;
    this.loginForm.reset();
    this.localstorage.setUserInLocalStroage(this.loggedUser)
    this.router.navigateByUrl('/home');

  }

}
