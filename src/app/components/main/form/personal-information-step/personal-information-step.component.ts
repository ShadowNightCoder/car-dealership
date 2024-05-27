import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { genericFunction } from 'src/app/components/functions/genericfunc.service';
import { PersonalInformationForm } from 'src/app/components/interface/form.interface';
import { FormService } from 'src/app/components/service/form.service';

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


  constructor(private genericFunc: genericFunction, private formService: FormService) { }

  ngOnInit(): void {
    this.personInfoForm = new FormGroup({
      'fullname': new FormControl(null, [Validators.required, Validators.minLength(3), 
        Validators.maxLength(40), this.formService.forbiddenCharacter.bind(this)]),
      'gender': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.minLength(3), 
        Validators.maxLength(40), Validators.email,  this.formService.forbiddenCharacter.bind(this)]),
      'birthDate': new FormControl(null, [Validators.required, this.forbiddenDate.bind(this)]),
    })

    this.resetSubscription = this.formService.getResetTrigger().subscribe(trigger => {
      if (trigger) {
        this.formService.resetForm(this.personInfoForm);
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
    this.personInfoEmit.emit(this.personInfo);

  }



  forbiddenDate(control: FormControl): { [dateState: string]: boolean } | null {
    if (!this.genericFunc.isValidDate(control.value)) {
      return { 'dateIsForbidden': true };
    }
    return null;
  }

}
