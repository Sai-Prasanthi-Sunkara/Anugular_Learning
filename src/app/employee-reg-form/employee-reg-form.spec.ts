import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRegForm } from './employee-reg-form';

describe('EmployeeRegForm', () => {
  let component: EmployeeRegForm;
  let fixture: ComponentFixture<EmployeeRegForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeRegForm],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeRegForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
