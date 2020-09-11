import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPaymentMethodsComponent } from './settings-payment-methods.component';

describe('SettingsPaymentMethodsComponent', () => {
  let component: SettingsPaymentMethodsComponent;
  let fixture: ComponentFixture<SettingsPaymentMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsPaymentMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPaymentMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
