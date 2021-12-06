import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptimaParteComponent } from './septima-parte.component';

describe('SeptimaParteComponent', () => {
  let component: SeptimaParteComponent;
  let fixture: ComponentFixture<SeptimaParteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeptimaParteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeptimaParteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
