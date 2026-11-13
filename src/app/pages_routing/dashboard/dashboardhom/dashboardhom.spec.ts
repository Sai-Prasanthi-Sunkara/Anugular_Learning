import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardhom } from './dashboardhom';

describe('Dashboardhom', () => {
  let component: Dashboardhom;
  let fixture: ComponentFixture<Dashboardhom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboardhom],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboardhom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
