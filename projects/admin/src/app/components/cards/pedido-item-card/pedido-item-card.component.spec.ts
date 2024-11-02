import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoItemCardComponent } from './pedido-item-card.component';

describe('PedidoItemCardComponent', () => {
  let component: PedidoItemCardComponent;
  let fixture: ComponentFixture<PedidoItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PedidoItemCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PedidoItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
