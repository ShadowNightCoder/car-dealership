import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from '../../interface/user.interface';
import { localStroageService } from '../../service/localstorage.service';


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

  constructor(private localstorage: localStroageService){}



  onSubmit(element: NgForm) {
    this.loggedUser.email = element.value.email;
    this.loggedUser.password = element.value.password;
    element.resetForm();
    this.emailStatus = '';
    this.passwordStatus = '';
    this.localstorage.setUserInLocalStroage(this.loggedUser)

  }
}
