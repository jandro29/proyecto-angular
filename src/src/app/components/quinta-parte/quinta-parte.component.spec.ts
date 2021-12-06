import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintaParteComponent } from './quinta-parte.component';

describe('QuintaParteComponent', () => {
  let component: QuintaParteComponent;
  let fixture: ComponentFixture<QuintaParteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuintaParteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuintaParteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
