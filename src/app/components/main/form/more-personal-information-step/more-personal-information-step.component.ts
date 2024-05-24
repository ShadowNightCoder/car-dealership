import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MorePersonalInformationForm, hobbies } from 'src/app/components/interface/form.interface';
import { FormResetService } from 'src/app/components/service/form.service';

@Component({
  selector: 'app-more-personal-information-step',
  templateUrl: './more-personal-information-step.component.html',
  styleUrls: ['./more-personal-information-step.component.scss']
})
export class MorePersonalInformationStepComponent implements OnInit {
  cityOptions = ['New York', 'Los Angeles', 'Chicago'];
  countryOptions = ['USA', 'Canada', 'Mexico'];
  morePersonalInfo: MorePersonalInformationForm = {
    address: '',
    city: '',
    country: '',
    hobbies: []
  }
  personMoreInfoForm!: FormGroup;
  @Output() personMoreInfoEmit = new EventEmitter<MorePersonalInformationForm>();
  resetSubscription!: Subscription;
  constructor(private formResetService: FormResetService){}

  ngOnInit(): void {
    this.personMoreInfoForm = new FormGroup({
      'address': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
      'city': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
      'country': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
      'hobbies': new FormArray([
        new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(40)])
      ]),
    })

    this.resetSubscription = this.formResetService.getResetTrigger().subscribe(trigger => {
      if (trigger) {
        this.formResetService.resetForm(this.personMoreInfoForm);
      }
    });
  }

  addNewHobbie() {
    const control = new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]);
    (<FormArray>this.personMoreInfoForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.personMoreInfoForm.get('hobbies')).controls;
  }


  onSubmit() {
    console.log("wired did it even worked?")
    this.morePersonalInfo = {
      address: this.personMoreInfoForm.value.address,
      city: this.personMoreInfoForm.value.city,
      country: this.personMoreInfoForm.value.country,
      hobbies: this.personMoreInfoForm.value.hobbies
    }
    console.log(this.morePersonalInfo)
    this.personMoreInfoEmit.emit(this.morePersonalInfo)
  }








}
