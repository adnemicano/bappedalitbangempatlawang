import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformasiHakiComponent } from './informasi-haki.component';

describe('InformasiHakiComponent', () => {
  let component: InformasiHakiComponent;
  let fixture: ComponentFixture<InformasiHakiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformasiHakiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformasiHakiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
