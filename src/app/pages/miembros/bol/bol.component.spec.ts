import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolComponent } from './bol.component';

describe('BolComponent', () => {
  let component: BolComponent;
  let fixture: ComponentFixture<BolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
