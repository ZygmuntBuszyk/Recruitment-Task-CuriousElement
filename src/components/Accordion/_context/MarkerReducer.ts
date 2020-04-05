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
                markers: state.markers.filter(marker => marker._lngLat.lng !== action.payload._lngLat.lng && marker._lngLat.lat !== action.payload._lngLat.lat )
            }
        case MarkerActions.update:
            return {
                ...state,
                markers: state.markers.map(marker => marker)
            } 
        default:
            return state 
    }
}
