import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasEditComponent } from './mesas-edit.component';

describe('MesasEditComponent', () => {
  let component: MesasEditComponent;
  let fixture: ComponentFixture<MesasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MesasEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
