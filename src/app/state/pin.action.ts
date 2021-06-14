import { createAction, props } from '@ngrx/store';
import { Sessions } from '../store/sessions.model';



export const LOAD_SESSIONS = '[pin page] load sessions';
export const LOAD_SESSIONS_SUCCESS = '[pin page] load success sessions ';

export const LOAD_DISTRICTS_SESSIONS = '[dist page] load sessions';
export const LOAD_DISTRICTS_SESSIONS_SUCCESS = '[dist page] load success sessions ';





export const loadSessions = createAction(LOAD_SESSIONS, props<{pin: string, date: string}>());
export const loadSessionsSuccess = createAction(LOAD_SESSIONS_SUCCESS, props<{sessions: Sessions[]}>());

export const loadSessionsByDistricts = createAction(LOAD_DISTRICTS_SESSIONS, props<{id: string, date: string}>());
export const loadSessionsSuccessByDistricts = createAction(LOAD_DISTRICTS_SESSIONS_SUCCESS, props<{sessions: Sessions[]}>());
