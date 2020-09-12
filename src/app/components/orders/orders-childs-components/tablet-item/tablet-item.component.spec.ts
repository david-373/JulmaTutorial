import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletItemComponent } from './tablet-item.component';

describe('TabletItemComponent', () => {
  let component: TabletItemComponent;
  let fixture: ComponentFixture<TabletItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabletItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
