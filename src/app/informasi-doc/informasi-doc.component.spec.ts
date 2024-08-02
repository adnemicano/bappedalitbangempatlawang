import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformasiDocComponent } from './informasi-doc.component';

describe('InformasiDocComponent', () => {
  let component: InformasiDocComponent;
  let fixture: ComponentFixture<InformasiDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformasiDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformasiDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
