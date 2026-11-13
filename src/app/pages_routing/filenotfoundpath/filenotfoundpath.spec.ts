import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filenotfoundpath } from './filenotfoundpath';

describe('Filenotfoundpath', () => {
  let component: Filenotfoundpath;
  let fixture: ComponentFixture<Filenotfoundpath>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Filenotfoundpath],
    }).compileComponents();

    fixture = TestBed.createComponent(Filenotfoundpath);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
