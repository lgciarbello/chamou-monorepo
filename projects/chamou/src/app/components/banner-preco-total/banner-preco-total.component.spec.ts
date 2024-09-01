import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BannerPrecoTotalComponent} from './banner-preco-total.component';

describe('BannerPrecoTotalComponent', () => {
  let component: BannerPrecoTotalComponent;
  let fixture: ComponentFixture<BannerPrecoTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerPrecoTotalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPrecoTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
