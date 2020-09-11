import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePreviousOffersComponent } from './active-previous-offers.component';

describe('ActivePreviousOffersComponent', () => {
  let component: ActivePreviousOffersComponent;
  let fixture: ComponentFixture<ActivePreviousOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivePreviousOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivePreviousOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
