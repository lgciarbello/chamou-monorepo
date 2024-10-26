import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasInfoComponent } from './mesas-info.component';

describe('MesasInfoComponent', () => {
  let component: MesasInfoComponent;
  let fixture: ComponentFixture<MesasInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MesasInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesasInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
