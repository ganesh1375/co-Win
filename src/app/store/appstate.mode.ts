import { sessionReducer } from "../state/pin.reducers";
import { PinState } from "../state/pin.state";

export interface AppState{
    sessions:PinState
}

export const appReducer=
{
    sessions:sessionReducer
}