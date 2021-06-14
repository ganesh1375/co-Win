import { createAction, props } from '@ngrx/store';
import { District } from 'src/app/store/districtList.model';

export const LOAD_DISTRICTS = '[Dist page] load dist';

export const LOAD_DISTRICTS_SUCCESS = '[Dist page] load dist';


export const loadDist = createAction(LOAD_DISTRICTS, props<{id: string}>());

export const loadDistSuccess = createAction(LOAD_DISTRICTS_SUCCESS, props<{districts: District[]}>());
