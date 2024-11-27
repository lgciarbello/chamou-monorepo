import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandaNomeModalComponent } from './comanda-nome-modal.component';

describe('ComandaNomeModalComponent', () => {
  let component: ComandaNomeModalComponent;
  let fixture: ComponentFixture<ComandaNomeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComandaNomeModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComandaNomeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
