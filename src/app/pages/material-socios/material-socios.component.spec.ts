import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosComponent } from './material-socios.component';

describe('ArticulosComponent', () => {
  let component: ArticulosComponent;
  let fixture: ComponentFixture<ArticulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
