import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPostPaidComponent } from './settings-post-paid.component';

describe('SettingsPostPaidComponent', () => {
  let component: SettingsPostPaidComponent;
  let fixture: ComponentFixture<SettingsPostPaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsPostPaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPostPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
