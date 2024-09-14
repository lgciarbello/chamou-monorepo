import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTextModalComponent } from './button-text-modal.component';

describe('ButtonTextModalComponent', () => {
  let component: ButtonTextModalComponent;
  let fixture: ComponentFixture<ButtonTextModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonTextModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonTextModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
