import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasPageComponent } from './mesas-page.component';

describe('MesasPageComponent', () => {
  let component: MesasPageComponent;
  let fixture: ComponentFixture<MesasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MesasPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
