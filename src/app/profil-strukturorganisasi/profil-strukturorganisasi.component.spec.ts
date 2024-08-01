import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilStrukturorganisasiComponent } from './profil-strukturorganisasi.component';

describe('ProfilStrukturorganisasiComponent', () => {
  let component: ProfilStrukturorganisasiComponent;
  let fixture: ComponentFixture<ProfilStrukturorganisasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilStrukturorganisasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilStrukturorganisasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
