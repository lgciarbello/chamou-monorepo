import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultInfoPageComponent } from './default-info-page.component';

describe('DefaultInfoPageComponent', () => {
  let component: DefaultInfoPageComponent;
  let fixture: ComponentFixture<DefaultInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaultInfoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
