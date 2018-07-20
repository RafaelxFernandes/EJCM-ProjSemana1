import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArduinoCatalogoComponent } from './arduino-catalogo.component';

describe('ArduinoCatalogoComponent', () => {
  let component: ArduinoCatalogoComponent;
  let fixture: ComponentFixture<ArduinoCatalogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArduinoCatalogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArduinoCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
