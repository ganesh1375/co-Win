import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PinState } from './pin.state';



const getSessionState = createFeatureSelector<PinState>('sessions');

export const getSessions = createSelector(getSessionState, (state) =>
{
    return state.sessions;
});
