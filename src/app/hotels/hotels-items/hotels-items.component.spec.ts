import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsItemsComponent } from './hotels-items.component';

describe('HotelsItemsComponent', () => {
  let component: HotelsItemsComponent;
  let fixture: ComponentFixture<HotelsItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
