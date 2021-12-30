import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PueComponent } from './pue.component';

describe('PueComponent', () => {
  let component: PueComponent;
  let fixture: ComponentFixture<PueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
