import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleButtonModalComponent } from './single-button-modal.component';

describe('OneButtonModalComponent', () => {
  let component: SingleButtonModalComponent;
  let fixture: ComponentFixture<SingleButtonModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleButtonModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleButtonModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
