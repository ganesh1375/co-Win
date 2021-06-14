import { createReducer, on } from '@ngrx/store';
import { loadSessions, loadSessionsByDistricts, loadSessionsSuccess, loadSessionsSuccessByDistricts } from './pin.action';
import { InitialState } from './pin.state';




export const sessionReducers = createReducer(InitialState, on(loadSessions, (state, action) => {
    return {
        ...state,
        pin: action.pin,
        date: action.date
    };
}), on(loadSessionsSuccess, (state, action) => {
    return {
        ...state,
        sessions: action.sessions
    };
}), on(loadSessionsByDistricts, (state, action) =>
{
    return{
        ...state,
        id: action.id,
        date: action.date
    };
}), on(loadSessionsSuccessByDistricts, (state, action) =>
{
    return{
        ...state,
        sessions: action.sessions
    };
}));



export function sessionReducer(state: any, action: any): any {
    return sessionReducers(state, action);
}
