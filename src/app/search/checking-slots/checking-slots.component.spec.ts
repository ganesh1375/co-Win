import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingSlotsComponent } from './checking-slots.component';

describe('CheckingSlotsComponent', () => {
  let component: CheckingSlotsComponent;
  let fixture: ComponentFixture<CheckingSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckingSlotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckingSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
