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


  // form validator for checking if there entred unvalid charectethat
  forbiddenCharacter(control: FormControl): { [characterState: string]: boolean } | null {
    const control_new = String(control.value).toLowerCase()
    const forbiddenChars = ['!', '<', '>', '&', '=', '+', '*', '/', '\\', '%', '(', ')', '[', ']', '{', '}', ';', ':', '"', '\'', ',', '`', '~', '|', '^'];
    const suspiciousKeywords = [
      // JavaScript functions
      'eval', 'alert', 'prompt', 'confirm', 'setTimeout', 'setInterval', 'XMLHttpRequest', 'fetch',
      // DOM manipulation
      'document.', 'window.', 'localStorage', 'sessionStorage', 'innerHTML', 'outerHTML', 'createElement', 'appendChild', 'insertAdjacentHTML',
      // JavaScript objects
      'location', 'history', 'navigator', 'cookie', 'window.open',
      // AJAX related
      'XMLHttpRequest', 'fetch',
      // JavaScript events
      'onmouseover', 'onmouseout', 'onmousedown', 'onmouseup', 'onmouseenter', 'onmouseleave', 'onmousemove', 'onkeydown', 'onkeyup', 'onkeypress', 'onfocus', 'onblur', 'onsubmit', 'onreset', 'onchange', 'onselect', 'onabort', 'onerror', 'onload', 'onunload', 'onresize', 'onscroll'
      // Additional keywords and functions can be added based on your application's specific requirements and context
    ];
    for (const char of forbiddenChars) {
      const charLowerCase = char.toLowerCase();
      if (control_new.includes(charLowerCase)) {
        return { 'characterIsForbidden': true };
      }
    }


    for (const keyword of suspiciousKeywords) {
      if (control_new.includes(keyword.toLowerCase())) {
        return { 'suspiciousKeywordDetected': true };
      }
    }


    return null;
  }
}
