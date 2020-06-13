import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondAngleMapComponent } from './second-angle-map.component';

describe('SecondAngleMapComponent', () => {
  let component: SecondAngleMapComponent;
  let fixture: ComponentFixture<SecondAngleMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondAngleMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondAngleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
