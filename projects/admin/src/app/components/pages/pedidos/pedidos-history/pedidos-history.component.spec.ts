import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosHistoryComponent } from './pedidos-history.component';

describe('PedidosHistoryComponent', () => {
  let component: PedidosHistoryComponent;
  let fixture: ComponentFixture<PedidosHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PedidosHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PedidosHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
