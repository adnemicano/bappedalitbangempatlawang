import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitbangInovasiComponent } from './litbang-inovasi.component';

describe('LitbangInovasiComponent', () => {
  let component: LitbangInovasiComponent;
  let fixture: ComponentFixture<LitbangInovasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitbangInovasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LitbangInovasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
