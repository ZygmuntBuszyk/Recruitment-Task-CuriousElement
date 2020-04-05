import React, { createContext, useReducer } from 'react';
import { MarkerReducer } from './MarkerReducer';
import { mapboxgl } from 'mapbox-gl';

// const marker = new mapboxgl.Marker({
//     draggable: true
// })
// .setLngLat([lng, lat])
// .addTo(map);
// const emptyMarker =  new mapboxgl.Marker({})
const initialState = {
    markers: []
}
console.log(initialState)
export const MarkerContext = createContext(initialState);

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(MarkerReducer, initialState);

    return ( <MarkerContext.Provider value={{
        markers: state.markers
    }}>
            {children}
        </MarkerContext.Provider> )
}