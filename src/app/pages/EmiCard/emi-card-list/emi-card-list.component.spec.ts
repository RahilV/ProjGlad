import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiCardListComponent } from './emi-card-list.component';

describe('EmiCardListComponent', () => {
  let component: EmiCardListComponent;
  let fixture: ComponentFixture<EmiCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmiCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
