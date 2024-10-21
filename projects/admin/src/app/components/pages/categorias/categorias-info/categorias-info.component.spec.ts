import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasInfoComponent } from './categorias-info.component';

describe('CategoriasInfoComponent', () => {
  let component: CategoriasInfoComponent;
  let fixture: ComponentFixture<CategoriasInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriasInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriasInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
