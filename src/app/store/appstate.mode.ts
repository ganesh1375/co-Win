import { DistrictReducer } from '../state/list_of_districts/districtList.reducers';
import { DistrictState } from '../state/list_of_districts/districtList.state';
import { statesReducer } from '../state/list_of_states/stateList.reducer';
import { StatesListState } from '../state/list_of_states/stateList.state';
import { sessionReducer } from '../state/pin.reducers';
import { PinState } from '../state/pin.state';

export interface AppState{
    sessions: PinState;
    states:StatesListState;
    districts:DistrictState
}

export const appReducer =
{
    sessions: sessionReducer,
    states:statesReducer,
    districts:DistrictReducer
};
