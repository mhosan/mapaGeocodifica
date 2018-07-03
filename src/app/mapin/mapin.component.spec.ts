import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapinComponent } from './mapin.component';

describe('MapinComponent', () => {
  let component: MapinComponent;
  let fixture: ComponentFixture<MapinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
