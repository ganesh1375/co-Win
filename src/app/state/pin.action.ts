import { createAction, props } from "@ngrx/store";
import { Sessions } from "../store/sessions.model";



export const LOAD_SESSIONS='[pin page] load sessions';

export const LOAD_SESSIONS_SUCCESS='[pin page] load success sessions ';


export const loadSessions=createAction(LOAD_SESSIONS,props<{pin:string,date:string}>());

export const loadSessionsSuccess=createAction(LOAD_SESSIONS,props<{sessions:Sessions[]}>());