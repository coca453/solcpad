import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotogaleriaComponent } from './fotogaleria.component';

describe('FotogaleriaComponent', () => {
  let component: FotogaleriaComponent;
  let fixture: ComponentFixture<FotogaleriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotogaleriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotogaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
