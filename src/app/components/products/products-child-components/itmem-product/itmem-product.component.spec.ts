import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmemProductComponent } from './itmem-product.component';

describe('ItmemProductComponent', () => {
  let component: ItmemProductComponent;
  let fixture: ComponentFixture<ItmemProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItmemProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmemProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
