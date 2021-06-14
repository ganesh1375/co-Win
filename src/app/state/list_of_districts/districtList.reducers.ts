import { createReducer, on } from '@ngrx/store';
import { loadDist, loadDistSuccess } from './districtList.action';
import { InitialState } from './districtList.state';

const districtReducer = createReducer(InitialState, on(loadDist, (state, action) => {
    // console.log(action)
    return {
        ...state,
        id: action.id
    };
}), on(loadDistSuccess, (state, action) => {
    // console.log(action.districts);
    return {
        ...state,
        districts: action.districts
    };
}));


export function DistrictReducer(state: any, action: any): any {
    return districtReducer(state, action);
}
