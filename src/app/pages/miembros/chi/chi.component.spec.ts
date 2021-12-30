import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiComponent } from './chi.component';

describe('ChiComponent', () => {
  let component: ChiComponent;
  let fixture: ComponentFixture<ChiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
