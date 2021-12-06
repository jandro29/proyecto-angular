import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartaParteComponent } from './cuarta-parte.component';

describe('CuartaParteComponent', () => {
  let component: CuartaParteComponent;
  let fixture: ComponentFixture<CuartaParteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuartaParteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuartaParteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
