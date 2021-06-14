import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByPinComponent } from './search-by-pin.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { appReducer } from 'src/app/store/appstate.mode';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
describe('SearchByPinComponent', () => {
  let component: SearchByPinComponent;
  let fixture: ComponentFixture<SearchByPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(appReducer), HttpClientTestingModule, HttpClientModule, ReactiveFormsModule],
      declarations: [ SearchByPinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
