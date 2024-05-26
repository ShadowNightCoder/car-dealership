import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarInformationForm, FormRequest, MorePersonalInformationForm, PersonalInformationForm, hobbies } from '../../interface/form.interface';
import { HttpClient } from '@angular/common/http';
import { localStroageService } from '../../service/localstorage.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
    windowWidth: number = 0;

  fullFormRequest: FormRequest = {
    personalInformation: {
      fullname: '',
      gender: '',
      email: '',
      birthDate: new Date()
    },
    morePersonalInformation: {
      address: '',
      city: '',
      country: '',
      hobbies: []
    },
    carInformation: {
      favoriteColor: '',
      seats: 0,
      motor: ''
    }
  };

  constructor(private http: HttpClient, private localstorageService: localStroageService) { }


  // Function to handle the form data submitted from the first step
  onFormSubmitted(formData: PersonalInformationForm) {
    this.fullFormRequest.personalInformation = formData;
  }

  // Function to handle the form data submitted from the second step
  onForm2Submitted(formData: MorePersonalInformationForm) {
    this.fullFormRequest.morePersonalInformation = formData;
  }

  // Function to handle the form data submitted from the third step
  onForm3Submitted(formData: CarInformationForm) {
    this.fullFormRequest.carInformation = formData;
    this.setInStorage();

  }

  setInStorage() {
    const jsonDataString = JSON.stringify(this.fullFormRequest);
    this.localstorageService.appendToLocalStorage('formList', jsonDataString);
    console.log(this.fullFormRequest);
  }
}
