import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadDist } from 'src/app/state/list_of_districts/districtList.action';
import { loadState } from 'src/app/state/list_of_states/stateList.action';
import { getState } from 'src/app/state/list_of_states/stateList.selector';
import { loadSessionsByDistricts } from 'src/app/state/pin.action';
import { getSessions } from 'src/app/state/pin.selector';
import { AppState } from 'src/app/store/appstate.mode';
import { District } from 'src/app/store/districtList.model';

@Component({
  selector: 'app-search-by-districts',
  templateUrl: './search-by-districts.component.html',
  styleUrls: ['./search-by-districts.component.scss']
})
export class SearchByDistrictsComponent implements OnInit {
  changingBackGroundForPin = false;
  changingBackGroundForDist = false;
  date2: any;
  pincode: any;
  currentdate: any;
  sessions: any;
  pinSearchView=false;
  distSearchView=false;
  optionArray:any;
  addingOptionText:any;
  districtsList:District[]=[];
  searchByDistrictsForm:any;
  districtId:any;
  noSessionsView=false;
  availableSessions=false;
  constructor(private store: Store<AppState>) { }
  searchByPinForm: any;
  ngOnInit(): void {
    this.store.dispatch(loadState());
    this.store.select(getState).subscribe(data=>
      {
        this.optionArray=data;
        for(let i of this.optionArray)
        {
          this.addingOptionText=document.getElementById('mySelect')!;
          let option=document.createElement('option');
          option.text=i.state_name;
          this.addingOptionText.appendChild(option);
          option.setAttribute('value', i.state_id);
        }
      })
    this.searchByDistrictsForm=new FormGroup({
      dateOfSlots:new FormControl('',Validators.required)
    });
  }

  getChange(event:any)
  {
    this.store.dispatch(loadDist({id:event.target.value}));
    this.store.select('districts').subscribe(data=>
      {
         this.districtsList=data.districts;
      })
  }
  getChange2(event:any)
  {
    this.districtId=event.target.value;
  }
  onSearch(value:any)
  {
    this.currentdate = value.dateOfSlots;
    this.date2 = this.currentdate[8] + this.currentdate[9] + this.currentdate[7] + this.currentdate[5] + this.currentdate[6] +
    this.currentdate[4] + this.currentdate[0] + this.currentdate[1] + this.currentdate[2] + this.currentdate[3];
    this.store.dispatch(loadSessionsByDistricts({id: this.districtId, date: this.date2}));
    this.store.select(getSessions).subscribe(data=>
      {
        if(data.length==0)
        {
          this.noSessionsView=true;
          this.availableSessions=false;
        }
        else{
        this.sessions = data;
        this.noSessionsView=false;
        this.availableSessions=true;
        }
      })

  }

}
