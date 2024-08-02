import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitbangPenelitianComponent } from './litbang-penelitian.component';

describe('LitbangPenelitianComponent', () => {
  let component: LitbangPenelitianComponent;
  let fixture: ComponentFixture<LitbangPenelitianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitbangPenelitianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LitbangPenelitianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
