import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendNotaficationComponent } from './send-notafication.component';

describe('SendNotaficationComponent', () => {
  let component: SendNotaficationComponent;
  let fixture: ComponentFixture<SendNotaficationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendNotaficationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendNotaficationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
