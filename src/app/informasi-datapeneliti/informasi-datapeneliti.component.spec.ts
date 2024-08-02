import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformasiDatapenelitiComponent } from './informasi-datapeneliti.component';

describe('InformasiDatapenelitiComponent', () => {
  let component: InformasiDatapenelitiComponent;
  let fixture: ComponentFixture<InformasiDatapenelitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformasiDatapenelitiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformasiDatapenelitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
