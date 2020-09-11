import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveOffersDetalisComponent } from './active-offers-detalis.component';

describe('ActiveOffersDetalisComponent', () => {
  let component: ActiveOffersDetalisComponent;
  let fixture: ComponentFixture<ActiveOffersDetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveOffersDetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveOffersDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
