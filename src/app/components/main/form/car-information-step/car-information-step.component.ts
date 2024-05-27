import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarInformationForm } from 'src/app/components/interface/form.interface';
import { FormService } from 'src/app/components/service/form.service';

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
  @Output() carInfoEmit = new EventEmitter<CarInformationForm>();

  constructor(private formService: FormService){}

  ngOnInit(): void {
      this.carInformation = new FormGroup({
        'color' : new FormControl('#000000'),
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
    this.carInfoEmit.emit(this.carInfo);
    this.triggerFormReset();
    this.carInformation.reset;
  }

  triggerFormReset() {
    this.formService.triggerReset();
  }
}
