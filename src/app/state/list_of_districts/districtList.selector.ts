import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DistrictState } from './districtList.state';


const getDistState = createFeatureSelector<DistrictState>('districts');

export const getDistricts = createSelector(getDistState, (state) =>
{
    return state.districts;
});
