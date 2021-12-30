import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenComponent } from './ven.component';

describe('VenComponent', () => {
  let component: VenComponent;
  let fixture: ComponentFixture<VenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
