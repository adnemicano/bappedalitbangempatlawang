import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSelayangpandangComponent } from './profil-selayangpandang.component';

describe('ProfilSelayangpandangComponent', () => {
  let component: ProfilSelayangpandangComponent;
  let fixture: ComponentFixture<ProfilSelayangpandangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilSelayangpandangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilSelayangpandangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
