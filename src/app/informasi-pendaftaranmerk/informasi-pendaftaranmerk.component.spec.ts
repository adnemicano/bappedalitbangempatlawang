import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformasiPendaftaranmerkComponent } from './informasi-pendaftaranmerk.component';

describe('InformasiPendaftaranmerkComponent', () => {
  let component: InformasiPendaftaranmerkComponent;
  let fixture: ComponentFixture<InformasiPendaftaranmerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformasiPendaftaranmerkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformasiPendaftaranmerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
