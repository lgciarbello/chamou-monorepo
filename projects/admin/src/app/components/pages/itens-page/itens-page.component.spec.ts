import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensPageComponent } from './itens-page.component';

describe('ItensPageComponent', () => {
  let component: ItensPageComponent;
  let fixture: ComponentFixture<ItensPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItensPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItensPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
