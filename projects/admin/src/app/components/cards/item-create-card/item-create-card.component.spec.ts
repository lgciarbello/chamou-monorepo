import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCreateCardComponent } from './item-create-card.component';

describe('ItemCreateCardComponent', () => {
  let component: ItemCreateCardComponent;
  let fixture: ComponentFixture<ItemCreateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemCreateCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemCreateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
