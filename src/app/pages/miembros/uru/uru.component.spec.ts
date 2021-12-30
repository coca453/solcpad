import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UruComponent } from './uru.component';

describe('UruComponent', () => {
  let component: UruComponent;
  let fixture: ComponentFixture<UruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
