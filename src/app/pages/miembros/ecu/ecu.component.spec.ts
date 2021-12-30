import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcuComponent } from './ecu.component';

describe('EcuComponent', () => {
  let component: EcuComponent;
  let fixture: ComponentFixture<EcuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
