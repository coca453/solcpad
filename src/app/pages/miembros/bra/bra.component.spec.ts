import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BraComponent } from './bra.component';

describe('ArgComponent', () => {
  let component: BraComponent;
  let fixture: ComponentFixture<BraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
