import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JulmaComponent } from './julma.component';

describe('JulmaComponent', () => {
  let component: JulmaComponent;
  let fixture: ComponentFixture<JulmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JulmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JulmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
