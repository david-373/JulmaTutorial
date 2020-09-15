import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalisComponent } from './detalis.component';

describe('DetalisComponent', () => {
  let component: DetalisComponent;
  let fixture: ComponentFixture<DetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
