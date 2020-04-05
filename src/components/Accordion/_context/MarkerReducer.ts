import React from 'react'
import { MarkerActions } from "../../../_enum/context/markerActions.enum";

export const MarkerReducer = (state, action) => {
    switch(action.type) {
        case MarkerActions.add:
            return state
        case MarkerActions.remove:
            return state
        case MarkerActions.update:
            return state 
        default:
            return state 
    }
}
