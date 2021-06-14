import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadSessions } from 'src/app/state/pin.action';
import { getSessions } from 'src/app/state/pin.selector';
import { AppState } from 'src/app/store/appstate.mode';

@Component({
  selector: 'app-search-by-pin',
  templateUrl: './search-by-pin.component.html',
  styleUrls: ['./search-by-pin.component.scss']
})
export class SearchByPinComponent implements OnInit {
  searchByPinForm: any;
  changingBackGroundForPin = false;
  changingBackGroundForDist = false;
  date2: any;
  pincode: any;
  currentdate: any;
  sessions: any;
  pinSearchView = false;
  noSessionsView = false;
  availableSessions = false;
  constructor(private store: Store<AppState>) { }

  get pin(): any {
    return this.searchByPinForm.get('pin');
  }
  ngOnInit(): void {
    this.searchByPinForm = new FormGroup({
      pin: new FormControl('', [Validators.required, Validators.maxLength(6), Validators.minLength(6)]),
      date: new FormControl('', Validators.required)
    });

  }
  onSubmit(value: any): any
  {
    this.currentdate = value.date;
    console.log(value.date);
    this.date2 = this.currentdate[8] + this.currentdate[9] + this.currentdate[7] + this.currentdate[5] + this.currentdate[6] +
    this.currentdate[4] + this.currentdate[0] + this.currentdate[1] + this.currentdate[2] + this.currentdate[3];
    this.pincode = value.pin;
    this.store.dispatch(loadSessions({pin: this.pincode, date: this.date2}));
    this.store.select(getSessions).subscribe(data =>
      {
        if (data.length === 0)
        {
          this.noSessionsView = true;
          this.availableSessions = false;
        }
        else{
        this.sessions = data;
        this.noSessionsView = false;
        this.availableSessions = true;
        }
      });
  }

}
