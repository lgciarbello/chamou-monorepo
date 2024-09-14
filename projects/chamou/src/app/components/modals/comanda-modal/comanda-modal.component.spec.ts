import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandaModalComponent } from './comanda-modal.component';

describe('ContaModalComponent', () => {
  let component: ComandaModalComponent;
  let fixture: ComponentFixture<ComandaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComandaModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComandaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
