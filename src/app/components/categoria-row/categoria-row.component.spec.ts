import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaRowComponent } from './categoria-row.component';

describe('CategoriaRowComponent', () => {
  let component: CategoriaRowComponent;
  let fixture: ComponentFixture<CategoriaRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriaRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriaRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
