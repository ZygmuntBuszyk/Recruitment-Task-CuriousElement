import React, { createContext, useReducer } from 'react';
import { MarkerReducer } from './MarkerReducer';
import { mapboxgl } from 'mapbox-gl';
import { MarkerActions } from '../../../_enum/context/markerActions.enum';

const initialState:any = {
    markers: []
}
export const MarkerContext = createContext(initialState);

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(MarkerReducer, initialState);

    const deleteMarker = (marker) => {
        dispatch({
            type: MarkerActions.remove,
            payload: marker
        })
    }

    const addMarker = (marker):void => {
        dispatch({
            type: MarkerActions.add,
            payload: marker
        })
    }
    
    return ( 
        <MarkerContext.Provider value={{
            addMarker,
            markers: state.markers,
            deleteMarker
        }}>
            {children}
        </MarkerContext.Provider> )
}