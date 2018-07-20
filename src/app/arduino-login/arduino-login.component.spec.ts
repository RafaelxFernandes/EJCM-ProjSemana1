import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArduinoLoginComponent } from './arduino-login.component';

describe('ArduinoLoginComponent', () => {
  let component: ArduinoLoginComponent;
  let fixture: ComponentFixture<ArduinoLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArduinoLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArduinoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
