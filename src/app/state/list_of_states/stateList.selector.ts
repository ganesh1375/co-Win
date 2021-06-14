import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StatesListState } from './stateList.state';



export const getStatesState = createFeatureSelector<StatesListState>('states');

export const getState = createSelector(getStatesState, (state) =>
{
    return state.states;
});
