import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadSessions } from 'src/app/state/pin.action';
import { getSessions } from 'src/app/state/pin.selector';
import { AppState } from 'src/app/store/appstate.mode';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  changingBackGroundForPin = false;
  changingBackGroundForDist = false;
  date2: any;
  pincode: any;
  currentdate: any;
  sessions: any;
  constructor(private store: Store<AppState>) { }

  searchByPinForm: any;

  ngOnInit(): void {

    this.searchByPinForm = new FormGroup({
      pin: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required)
    });

  }

  pinSelected()
  {
    this.changingBackGroundForPin = true;
    this.changingBackGroundForDist = false;
  }
  districtSelected()
  {
    this.changingBackGroundForPin = false;
    this.changingBackGroundForDist = true;
  }

  onSubmit(value: any)
  {
    console.log(this.searchByPinForm.value);
    this.currentdate = value.date;
    console.log(value.date);
    this.date2 = this.currentdate[8] + this.currentdate[9] + this.currentdate[7] + this.currentdate[5] + this.currentdate[6] +
   this.currentdate[4] + this.currentdate[0] + this.currentdate[1] + this.currentdate[2] + this.currentdate[3];
    this.pincode = value.pin;
    this.store.dispatch(loadSessions({pin: this.pincode, date: this.date2}));
    this.store.select(getSessions).subscribe(data =>
      {
        this.sessions = data;
      });
  }

}
