import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsFilterStarsComponent } from './hotels-filter-stars.component';

describe('HotelsFilterStarsComponent', () => {
  let component: HotelsFilterStarsComponent;
  let fixture: ComponentFixture<HotelsFilterStarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsFilterStarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsFilterStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
