import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JulmaFormComponent } from './julma-form.component';

describe('JulmaFormComponent', () => {
  let component: JulmaFormComponent;
  let fixture: ComponentFixture<JulmaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JulmaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JulmaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
