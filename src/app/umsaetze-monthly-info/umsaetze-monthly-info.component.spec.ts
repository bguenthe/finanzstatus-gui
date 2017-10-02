import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmsaetzeMonthlyInfoComponent } from './umsaetze-monthly-info.component';

describe('UmsaetzeMonthlyInfoComponent', () => {
  let component: UmsaetzeMonthlyInfoComponent;
  let fixture: ComponentFixture<UmsaetzeMonthlyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmsaetzeMonthlyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmsaetzeMonthlyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
