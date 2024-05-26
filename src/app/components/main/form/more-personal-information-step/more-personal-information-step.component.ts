import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MorePersonalInformationForm, hobbies } from 'src/app/components/interface/form.interface';
import { FormService } from 'src/app/components/service/form.service';

@Component({
  selector: 'app-more-personal-information-step',
  templateUrl: './more-personal-information-step.component.html',
  styleUrls: ['./more-personal-information-step.component.scss']
})
export class MorePersonalInformationStepComponent implements OnInit {
  // cityOptions = ['New York', 'Los Angeles', 'Chicago'];
  // countryOptions = ['USA', 'Canada', 'Mexico'];
  morePersonalInfo: MorePersonalInformationForm = {
    address: '',
    city: '',
    country: '',
    hobbies: []
  }
  personMoreInfoForm!: FormGroup;
  @Output() personMoreInfoEmit = new EventEmitter<MorePersonalInformationForm>();
  resetSubscription!: Subscription;
  constructor(private formService: FormService){}

  ngOnInit(): void {
    this.personMoreInfoForm = new FormGroup({
      'address': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(40),
        this.formService.forbiddenCharacter.bind(this)
      ]),
      'city': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(40),
        this.formService.forbiddenCharacter.bind(this)
      ]),
      'country': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(40),
        this.formService.forbiddenCharacter.bind(this)
      ]),
      'hobbies': new FormArray([
        new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(40),
          this.formService.forbiddenCharacter.bind(this)
        ])
      ]),
    })

    this.resetSubscription = this.formService.getResetTrigger().subscribe(trigger => {
      if (trigger) {
        this.formService.resetForm(this.personMoreInfoForm);
      }
    });
  }

  addNewHobbie() {
    const control = new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(40), this.formService.forbiddenCharacter.bind(this)]);
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



  
  public countries = [
    { name: 'Israel', cities: ['Jerusalem', 'Tel Aviv', 'Haifa', 'Beersheba', 'Eilat', 'Nazareth', 'Netanya'] },
    { name: 'United States', cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio'] },
    { name: 'United Kingdom', cities: ['London', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool', 'Newcastle', 'Bristol'] },
    { name: 'Canada', cities: ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Quebec City'] },
    { name: 'Australia', cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Canberra'] },
    { name: 'France', cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg'] },
    { name: 'Germany', cities: ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf'] },
    { name: 'Italy', cities: ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo', 'Genoa', 'Bologna'] },
    { name: 'Spain', cities: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza', 'Malaga', 'Murcia'] },
    { name: 'India', cities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad'] },
    { name: 'Brazil', cities: ['Sao Paulo', 'Rio de Janeiro', 'Brasilia', 'Salvador', 'Fortaleza', 'Belo Horizonte', 'Manaus'] },
    { name: 'Russia', cities: ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Nizhny Novgorod', 'Kazan', 'Chelyabinsk'] },
    { name: 'China', cities: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen', 'Tianjin', 'Chongqing', 'Hangzhou'] },
    { name: 'Japan', cities: ['Tokyo', 'Yokohama', 'Osaka', 'Nagoya', 'Sapporo', 'Fukuoka', 'Kobe'] },
    { name: 'South Korea', cities: ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon', 'Gwangju', 'Ulsan'] },
    { name: 'Mexico', cities: ['Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana', 'Leon', 'Juarez'] },
    { name: 'Argentina', cities: ['Buenos Aires', 'Cordoba', 'Rosario', 'Mendoza', 'San Miguel de Tucuman', 'La Plata', 'Mar del Plata'] },
    // Add more countries and cities here
  ];
  
  public cities: string[] = [];


  onCountryChange(selectedCountry: string) {
    const country = this.countries.find(c => c.name === selectedCountry);
    this.cities = country ? country.cities : [];
    this.personMoreInfoForm.get('city')?.reset();
  }




}
