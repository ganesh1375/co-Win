import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadDist } from 'src/app/state/list_of_districts/districtList.action';
import { getDistricts } from 'src/app/state/list_of_districts/districtList.selector';
import { loadState } from 'src/app/state/list_of_states/stateList.action';
import { getState } from 'src/app/state/list_of_states/stateList.selector';
import { loadSessions, loadSessionsByDistricts } from 'src/app/state/pin.action';
import { getSessions } from 'src/app/state/pin.selector';
import { AppState } from 'src/app/store/appstate.mode';
import { District } from 'src/app/store/districtList.model';

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
  pinSearchView = false;
  distSearchView = false;
  optionArray: any;
  addingOptionText: any;
  districtsList: District[] = [];
  searchByDistrictsForm: any;
  districtId: any;
  constructor(private store: Store<AppState>) { }
  searchByPinForm: any;
  ngOnInit(): void {
  }

  pinSelected(): any
  {
    this.changingBackGroundForPin = true;
    this.changingBackGroundForDist = false;
    this.pinSearchView = true;
    this.distSearchView = false;
  }
  districtSelected(): any
  {
    this.changingBackGroundForPin = false;
    this.changingBackGroundForDist = true;
    this.pinSearchView = false;
    this.distSearchView = true;
  }
}
