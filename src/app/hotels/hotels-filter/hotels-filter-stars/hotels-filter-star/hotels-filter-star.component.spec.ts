import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsFilterStarComponent } from './hotels-filter-star.component';

describe('HotelsFilterStarComponent', () => {
  let component: HotelsFilterStarComponent;
  let fixture: ComponentFixture<HotelsFilterStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsFilterStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsFilterStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
