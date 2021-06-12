import { Sessions } from "../store/sessions.model";


export interface PinState
{
    sessions:Sessions[];
}


export const InitialState:PinState={
    sessions:[]
}