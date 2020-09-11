import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JulmaRegisterComponent } from './julma-register.component';

describe('JulmaRegisterComponent', () => {
  let component: JulmaRegisterComponent;
  let fixture: ComponentFixture<JulmaRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JulmaRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JulmaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
