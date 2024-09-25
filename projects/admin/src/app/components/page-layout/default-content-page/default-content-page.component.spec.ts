import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultContentPageComponent } from './default-content-page.component';

describe('DefaultContentPageComponent', () => {
  let component: DefaultContentPageComponent;
  let fixture: ComponentFixture<DefaultContentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaultContentPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
