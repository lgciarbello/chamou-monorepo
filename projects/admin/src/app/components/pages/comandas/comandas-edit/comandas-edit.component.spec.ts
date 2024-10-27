import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandasEditComponent } from './comandas-edit.component';

describe('ComandasEditComponent', () => {
  let component: ComandasEditComponent;
  let fixture: ComponentFixture<ComandasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComandasEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComandasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
