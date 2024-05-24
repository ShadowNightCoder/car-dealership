import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorePersonalInformationStepComponent } from './more-personal-information-step.component';

describe('MorePersonalInformationStepComponent', () => {
  let component: MorePersonalInformationStepComponent;
  let fixture: ComponentFixture<MorePersonalInformationStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorePersonalInformationStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorePersonalInformationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
