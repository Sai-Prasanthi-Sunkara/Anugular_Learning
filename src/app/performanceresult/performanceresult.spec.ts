import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Performanceresult } from './performanceresult';

describe('Performanceresult', () => {
  let component: Performanceresult;
  let fixture: ComponentFixture<Performanceresult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Performanceresult],
    }).compileComponents();

    fixture = TestBed.createComponent(Performanceresult);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
