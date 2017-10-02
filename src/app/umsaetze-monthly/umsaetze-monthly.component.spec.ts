import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmsaetzeMonthlyComponent } from './umsaetze-monthly.component';

describe('UmsaetzeMonthlyComponent', () => {
  let component: UmsaetzeMonthlyComponent;
  let fixture: ComponentFixture<UmsaetzeMonthlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmsaetzeMonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmsaetzeMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
