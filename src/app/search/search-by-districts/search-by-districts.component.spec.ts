import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByDistrictsComponent } from './search-by-districts.component';

describe('SearchByDistrictsComponent', () => {
  let component: SearchByDistrictsComponent;
  let fixture: ComponentFixture<SearchByDistrictsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByDistrictsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByDistrictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
