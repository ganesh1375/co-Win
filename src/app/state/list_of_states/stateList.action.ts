import { createAction, props } from "@ngrx/store";
import { States } from "src/app/store/stateList.mode";

export const LOAD_STATES = '[states page] load states';
export const LOAD_STATES_SUCCESS = '[states page] load states success';

export const loadState=createAction(LOAD_STATES);
export const loadStateSuccess=createAction(LOAD_STATES_SUCCESS,props<{ states: States[] }>());