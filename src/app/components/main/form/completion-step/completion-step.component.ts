import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-completion-step',
  templateUrl: './completion-step.component.html',
  styleUrls: ['./completion-step.component.scss']
})
export class CompletionStepComponent {
  @Output() resetStepper = new EventEmitter<void>();

  reset() {
    this.resetStepper.emit();
  }
}
