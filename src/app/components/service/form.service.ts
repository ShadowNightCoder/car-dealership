// form-reset.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormResetService {
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
}
