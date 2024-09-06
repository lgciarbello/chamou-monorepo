import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceTextModalComponent } from './price-text-modal.component';

describe('TextOnlyModalComponent', () => {
  let component: PriceTextModalComponent;
  let fixture: ComponentFixture<PriceTextModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceTextModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceTextModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
