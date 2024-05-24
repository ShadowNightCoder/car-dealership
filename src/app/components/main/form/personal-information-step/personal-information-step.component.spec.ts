import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInformationStepComponent } from './personal-information-step.component';

describe('PersonalInformationStepComponent', () => {
  let component: PersonalInformationStepComponent;
  let fixture: ComponentFixture<PersonalInformationStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInformationStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalInformationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
