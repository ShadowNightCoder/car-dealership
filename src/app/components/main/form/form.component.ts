import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { hobbies } from '../../interface/form.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  // hobbiesList : hobbies[] = []

  // addNewHobbie(){
  //   this.hobbiesList.push({
  //     hobbieName: '',
  //   })
  // }

  // selectedColor: string = '#ffffff'; // Initial white color

  // selectedSeats: number = 0; // Initialize selectedSeats

  // // (Optional) Validation function for seat number
  // validateSeats(seats: number): boolean {
  //   return seats >= 2 && seats <= 7;
  // }

  // motorsList: string[] = ["electric", "fuel"]

  // formatLabel(value: number): string {
  //   if (value >= 1) {
  //     return Math.round(value / 1) + '';
  //   }

  //   return `${value}`;
  // }




  // firstFormGroup = this._formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });
  // isLinear = true;

  // constructor(private _formBuilder: FormBuilder) {}



  // selectedAddress: string = '';
  // selectedCity: string = '';
  // selectedCountry: string = '';
  // addressOptions: string[] = [];
  // cityOptions: string[] = [];
  // countryOptions: string[] = [];


  // ngOnInit() {
  //   // Populate options using a service or directly here (replace with your data)
  //   this.addressOptions = ["123 Main St", "456 Elm St"];
  //   this.cityOptions = ["Anytown", "Springfield"];
  //   this.countryOptions = ["US", "CA"];
  // }



  // selected = 'option2';

  






















  isLinear = false;
  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
  

  constructor(private _formBuilder: FormBuilder) {
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   gender: ['', Validators.required],
    //   birthDate: ['', Validators.required]
    // });

    // this.secondFormGroup = this._formBuilder.group({
    //   address: ['', Validators.required],
    //   city: ['', Validators.required],
    //   country: ['', Validators.required],
    //   seats: [2, [Validators.required, Validators.min(2), Validators.max(7)]],
    //   motor: ['', Validators.required]
    // });
  }

 
}
