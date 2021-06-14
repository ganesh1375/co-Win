import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchByDistrictsComponent } from './search-by-districts.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { appReducer } from 'src/app/store/appstate.mode';
import { StoreModule } from '@ngrx/store';

describe('SearchByDistrictsComponent', () => {
  let component: SearchByDistrictsComponent;
  let fixture: ComponentFixture<SearchByDistrictsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(appReducer), HttpClientTestingModule, HttpClientModule, ReactiveFormsModule],
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
