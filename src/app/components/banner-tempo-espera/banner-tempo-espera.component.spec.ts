import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTempoEsperaComponent } from './banner-tempo-espera.component';

describe('BannerTempoEsperaComponent', () => {
  let component: BannerTempoEsperaComponent;
  let fixture: ComponentFixture<BannerTempoEsperaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerTempoEsperaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerTempoEsperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
