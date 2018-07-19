import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArduinoHomeComponent } from './arduino-home.component';

describe('ArduinoHomeComponent', () => {
  let component: ArduinoHomeComponent;
  let fixture: ComponentFixture<ArduinoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArduinoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArduinoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
