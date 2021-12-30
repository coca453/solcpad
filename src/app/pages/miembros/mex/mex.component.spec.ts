import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MexComponent } from './mex.component';

describe('MexComponent', () => {
  let component: MexComponent;
  let fixture: ComponentFixture<MexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
