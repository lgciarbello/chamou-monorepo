import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandaPedidoCardComponent } from './comanda-pedido-card.component';

describe('ComandaPedidoCardComponent', () => {
  let component: ComandaPedidoCardComponent;
  let fixture: ComponentFixture<ComandaPedidoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComandaPedidoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComandaPedidoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
