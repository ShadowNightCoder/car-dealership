import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarInformationForm } from 'src/app/components/interface/form.interface';

@Component({
  selector: 'app-car-information-step',
  templateUrl: './car-information-step.component.html',
  styleUrls: ['./car-information-step.component.scss']
})
export class CarInformationStepComponent implements OnInit{
  // @Input() secondFormGroup!: FormGroup;
  motorsList = ['Electric', 'Gasoline', 'Hybrid', 'Diesel'];
  selectedSeats: number = 2;
  carInformation!: FormGroup;
  carInfo: CarInformationForm = {
    favoriteColor: '',
    seats: 2,
    motor: ''
  }


  ngOnInit(): void {
      this.carInformation = new FormGroup({
        'color' : new FormControl(null),
        'seats' : new FormControl(null),
        'motor' : new FormControl(null, Validators.required),
      })
  }
  
  formatLabel(value: number): string {
    return value.toString();
  }

  onSubmit(){
    this.carInfo = {
      favoriteColor: this.carInformation.value.color,
      seats: this.carInformation.value.seats,
      motor: this.carInformation.value.motor,
    }
    console.log(this.carInfo)
  }
}
