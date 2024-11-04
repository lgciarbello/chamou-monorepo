import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacoesInfoComponent } from './avaliacoes-info.component';

describe('AvaliacoesInfoComponent', () => {
  let component: AvaliacoesInfoComponent;
  let fixture: ComponentFixture<AvaliacoesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvaliacoesInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvaliacoesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
