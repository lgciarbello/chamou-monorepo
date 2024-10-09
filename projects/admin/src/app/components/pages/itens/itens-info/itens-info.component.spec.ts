import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensInfoComponent } from './itens-info.component';

describe('ItensInfoComponent', () => {
  let component: ItensInfoComponent;
  let fixture: ComponentFixture<ItensInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItensInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItensInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
