import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { genericFunction } from 'src/app/components/functions/genericfunc.service';
import { PersonalInformationForm } from 'src/app/components/interface/form.interface';
import { FormResetService } from 'src/app/components/service/form.service';

@Component({
  selector: 'app-personal-information-step',
  templateUrl: './personal-information-step.component.html',
  styleUrls: ['./personal-information-step.component.scss']
})
export class PersonalInformationStepComponent implements OnInit {
  genders = ['male', 'female', 'else']
  personInfo: PersonalInformationForm = {
    fullname: '',
    gender: '',
    email: '',
    birthDate: new Date()
  };
  personInfoForm!: FormGroup;
  @Output() personInfoEmit = new EventEmitter<PersonalInformationForm>();
  resetSubscription!: Subscription;


  constructor(private genericFunc: genericFunction, private formResetService: FormResetService){}

  ngOnInit(): void {
    this.personInfoForm = new FormGroup({
      'fullname': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
      'gender': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(40), Validators.email]),
      'birthDate': new FormControl(null, [Validators.required, this.forbiddenDate.bind(this)]),
    })

    this.resetSubscription = this.formResetService.getResetTrigger().subscribe(trigger => {
      if (trigger) {
        this.formResetService.resetForm(this.personInfoForm);
      }
    });
  }

  onSubmit() {
    this.personInfo = {
      fullname: this.personInfoForm.value.fullname,
      gender: this.personInfoForm.value.gender,
      email: this.personInfoForm.value.email,
      birthDate: this.personInfoForm.value.birthDate,
    }
    console.log(this.personInfo.birthDate)
    console.log(this.personInfo)

    this.personInfoEmit.emit(this.personInfo);

  }


  
  forbiddenDate(control: FormControl): { [dateState: string]: boolean } | null {
    if (!this.genericFunc.isValidDate(control.value)) {
      return { 'dateIsForbidden': true };
    }
    return null;
  }
  

  

}
