import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiCardByNoComponent } from './emi-card-by-no.component';

describe('EmiCardByNoComponent', () => {
  let component: EmiCardByNoComponent;
  let fixture: ComponentFixture<EmiCardByNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmiCardByNoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiCardByNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
