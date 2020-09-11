import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsUsERSComponent } from './settings-us-ers.component';

describe('SettingsUsERSComponent', () => {
  let component: SettingsUsERSComponent;
  let fixture: ComponentFixture<SettingsUsERSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsUsERSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsUsERSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
