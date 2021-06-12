import { createReducer, on } from '@ngrx/store';
import { loadSessions, loadSessionsSuccess } from './pin.action';
import { InitialState } from './pin.state';




export const _sessionReducer = createReducer(InitialState, on(loadSessions, (state, action) => {
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
}));



export function sessionReducer(state: any, action: any): any {
    return _sessionReducer(state, action);
}
