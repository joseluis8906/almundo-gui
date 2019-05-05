import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsFilterNombreComponent } from './hotels-filter-nombre.component';

describe('HotelsFilterNombreComponent', () => {
  let component: HotelsFilterNombreComponent;
  let fixture: ComponentFixture<HotelsFilterNombreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsFilterNombreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsFilterNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
