import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaParteComponent } from './segunda-parte.component';

describe('SegundaParteComponent', () => {
  let component: SegundaParteComponent;
  let fixture: ComponentFixture<SegundaParteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundaParteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundaParteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
