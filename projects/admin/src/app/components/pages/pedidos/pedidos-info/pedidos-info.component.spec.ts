import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosInfoComponent } from './pedidos-info.component';

describe('PedidosInfoComponent', () => {
  let component: PedidosInfoComponent;
  let fixture: ComponentFixture<PedidosInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PedidosInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PedidosInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
