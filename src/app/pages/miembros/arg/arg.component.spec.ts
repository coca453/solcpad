import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgComponent } from './arg.component';

describe('ArgComponent', () => {
  let component: ArgComponent;
  let fixture: ComponentFixture<ArgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
