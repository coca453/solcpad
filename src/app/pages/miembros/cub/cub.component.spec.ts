import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubComponent } from './cub.component';

describe('CubComponent', () => {
  let component: CubComponent;
  let fixture: ComponentFixture<CubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
