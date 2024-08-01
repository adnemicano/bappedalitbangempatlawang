import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilDefinisiComponent } from './profil-definisi.component';

describe('ProfilDefinisiComponent', () => {
  let component: ProfilDefinisiComponent;
  let fixture: ComponentFixture<ProfilDefinisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilDefinisiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilDefinisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
