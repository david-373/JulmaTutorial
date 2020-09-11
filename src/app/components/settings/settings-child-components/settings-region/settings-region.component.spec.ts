import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsRegionComponent } from './settings-region.component';

describe('SettingsRegionComponent', () => {
  let component: SettingsRegionComponent;
  let fixture: ComponentFixture<SettingsRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
