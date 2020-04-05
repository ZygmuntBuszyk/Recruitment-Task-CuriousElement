import React from 'react'
import { MarkerActions } from "../../../_enum/context/markerActions.enum";

export const MarkerReducer = (state, action) => {
    switch(action.type) {
        case MarkerActions.add:
            return {
                ...state,
                markers: [ action.payload, ...state.markers ]
            }
        case MarkerActions.remove:
            return {
                ...state,
                markers: state.markers
                // action.payload
            }
        case MarkerActions.update:
            return state 
        default:
            return state 
    }
}
