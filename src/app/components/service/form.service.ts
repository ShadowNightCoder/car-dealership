// form-reset.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private resetTrigger = new BehaviorSubject<boolean>(false);

  constructor() { }

  getResetTrigger(): Observable<boolean> {
    return this.resetTrigger.asObservable();
  }

  triggerReset() {
    this.resetTrigger.next(true);
  }

  resetForm(form: FormGroup) {
    form.reset();
  }


  // this is my own form validator for checking if there entred unvalid charecter that is: ,
  forbiddenCharacter(control: FormControl): { [characterState: string]: boolean } | null {
    if (control.value && control.value.includes(',')) {
      console.log(control.value)
      console.log(control.value.includes(','))
      return { 'characterIsForbidden': true };
    }
    return null;
  }
}
