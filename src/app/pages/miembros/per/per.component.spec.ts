import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerComponent } from './per.component';

describe('PerComponent', () => {
  let component: PerComponent;
  let fixture: ComponentFixture<PerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
