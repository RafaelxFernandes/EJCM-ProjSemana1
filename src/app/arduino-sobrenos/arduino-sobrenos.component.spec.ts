import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArduinoSobrenosComponent } from './arduino-sobrenos.component';

describe('ArduinoSobrenosComponent', () => {
  let component: ArduinoSobrenosComponent;
  let fixture: ComponentFixture<ArduinoSobrenosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArduinoSobrenosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArduinoSobrenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
