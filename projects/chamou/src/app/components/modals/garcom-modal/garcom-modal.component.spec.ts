import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarcomModalComponent } from './garcom-modal.component';

describe('GarcomModalComponent', () => {
  let component: GarcomModalComponent;
  let fixture: ComponentFixture<GarcomModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GarcomModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GarcomModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
