import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakAccount } from './bak-account';

describe('BakAccount', () => {
  let component: BakAccount;
  let fixture: ComponentFixture<BakAccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BakAccount],
    }).compileComponents();

    fixture = TestBed.createComponent(BakAccount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
