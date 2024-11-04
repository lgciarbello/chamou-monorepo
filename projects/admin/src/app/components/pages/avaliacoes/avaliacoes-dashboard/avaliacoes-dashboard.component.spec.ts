import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacoesDashboardComponent } from './avaliacoes-dashboard.component';

describe('AvaliacoesDashboardComponent', () => {
  let component: AvaliacoesDashboardComponent;
  let fixture: ComponentFixture<AvaliacoesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvaliacoesDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvaliacoesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
