import { States } from 'src/app/store/stateList.mode';

export interface StatesListState
{
    states: States[];
}

export const InitialState: StatesListState =
{
    states: []
};
