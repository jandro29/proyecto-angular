import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceraParteComponent } from './tercera-parte.component';

describe('TerceraParteComponent', () => {
  let component: TerceraParteComponent;
  let fixture: ComponentFixture<TerceraParteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerceraParteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceraParteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
