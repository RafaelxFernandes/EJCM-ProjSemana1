import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArduinoContatoComponent } from './arduino-contato.component';

describe('ArduinoContatoComponent', () => {
  let component: ArduinoContatoComponent;
  let fixture: ComponentFixture<ArduinoContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArduinoContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArduinoContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
