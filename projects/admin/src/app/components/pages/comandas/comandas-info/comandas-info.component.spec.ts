import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandasInfoComponent } from './comandas-info.component';

describe('ComandasInfoComponent', () => {
  let component: ComandasInfoComponent;
  let fixture: ComponentFixture<ComandasInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComandasInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComandasInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
