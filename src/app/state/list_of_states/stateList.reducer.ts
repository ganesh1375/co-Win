import { createReducer, on } from "@ngrx/store"
import { InitialState } from "./stateList.state"
import { loadState, loadStateSuccess } from "./stateList.action"



const _statesReducer = createReducer(InitialState, on(loadState, (state) => {
    return {
        ...state,
        states: state.states
    }
}), on(loadStateSuccess, (state, action) => {
    return {
        ...state,
        states: action.states
    }
}))

export function statesReducer(state: any, action: any) {
    return _statesReducer(state, action)
}