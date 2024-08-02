import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformasiRegulasiComponent } from './informasi-regulasi.component';

describe('InformasiRegulasiComponent', () => {
  let component: InformasiRegulasiComponent;
  let fixture: ComponentFixture<InformasiRegulasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformasiRegulasiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformasiRegulasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
