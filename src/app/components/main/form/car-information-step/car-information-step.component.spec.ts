import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInformationStepComponent } from './car-information-step.component';

describe('CarInformationStepComponent', () => {
  let component: CarInformationStepComponent;
  let fixture: ComponentFixture<CarInformationStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarInformationStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarInformationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
