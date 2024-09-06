import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericModalLayoutComponent } from './generic-modal-layout.component';

describe('GenericModalLayoutComponent', () => {
  let component: GenericModalLayoutComponent;
  let fixture: ComponentFixture<GenericModalLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenericModalLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericModalLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
