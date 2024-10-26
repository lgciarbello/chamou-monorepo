import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaComandaCardComponent } from './mesa-comanda-card.component';

describe('MesaComandaCardComponent', () => {
  let component: MesaComandaCardComponent;
  let fixture: ComponentFixture<MesaComandaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MesaComandaCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesaComandaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
