import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandasHistoryComponent } from './comandas-history.component';

describe('ComandasHistoryComponent', () => {
  let component: ComandasHistoryComponent;
  let fixture: ComponentFixture<ComandasHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComandasHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComandasHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
