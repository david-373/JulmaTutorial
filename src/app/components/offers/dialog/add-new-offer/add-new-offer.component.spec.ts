import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewOfferComponent } from './add-new-offer.component';

describe('AddNewOfferComponent', () => {
  let component: AddNewOfferComponent;
  let fixture: ComponentFixture<AddNewOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
