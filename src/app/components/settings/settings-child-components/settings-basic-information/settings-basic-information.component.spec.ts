import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsBasicInformationComponent } from './settings-basic-information.component';

describe('SettingsBasicInformationComponent', () => {
  let component: SettingsBasicInformationComponent;
  let fixture: ComponentFixture<SettingsBasicInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsBasicInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsBasicInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
