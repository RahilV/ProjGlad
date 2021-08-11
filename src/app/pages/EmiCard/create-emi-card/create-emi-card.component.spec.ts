import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmiCardComponent } from './create-emi-card.component';

describe('CreateEmiCardComponent', () => {
  let component: CreateEmiCardComponent;
  let fixture: ComponentFixture<CreateEmiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmiCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
