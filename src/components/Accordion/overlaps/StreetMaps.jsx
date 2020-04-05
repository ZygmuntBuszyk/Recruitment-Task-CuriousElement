import React, { useState, useEffect, useRef, MutableRefObject, useContext } from 'react'
import mapboxgl from 'mapbox-gl';
import { AccessToken } from '../../../_enum/accessToken.enum';
import './streetMaps.css';
import { IPointer } from '../../../_interface/IPointer'
import { MarkerContext } from '../_context/MarkersState';

export const StreetMaps = ({map, mapContainer}) => {

    const { markers } = useContext(MarkerContext);
    // const defaultState:IPointer;
    // MutableRefObject<any>
    // const [mapState, setState] = useState({
    //     // lng: 5,
    //     // lat: 34,
    //     // zoom: 2
        
    // });
    // const [markerState, setState ] = useState(); 
        useEffect(() => {
            console.log('now')
            // map.on('move', () => {
            //     setState({
            //         lng: map.getCenter().lng.toFixed(4),
            //         lat: map.getCenter().lat.toFixed(4),
            //         zoom: map.getZoom().toFixed(2)
            //     });
            // });
            if(map) {
                map.on('click', e => {
                    console.log('Create a marker');
                    // const point:IPointer = e.point;
                    const lng = e.lngLat.lng; 
                    const lat = e.lngLat.lat;
                    console.log(e)
                    const marker = new mapboxgl.Marker({
                        draggable: true
                    })
                    .setLngLat([lng, lat])
                    .addTo(map);
    
                    // setState([...markerState, marker]);
                      console.log(marker)
                })
            }
        })
           
                // console.log(markerState)
                // map.removeLayer(x);
                // this.setState({
                    //     lng: map.getCenter().lng.toFixed(4),
                    //     lat: map.getCenter().lat.toFixed(4),
                    //     zoom: map.getZoom().toFixed(2)
                    //     });


         
            
        //     function onDragEnd() {
        //     var lngLat = marker.getLngLat();
        //     coordinates.style.display = 'block';
        //     coordinates.innerHTML =
        //     'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
        //     }
            
        //     marker.on('dragend', onDragEnd);


            
  
        // map.on('move', () => {
        //     this.setState({
        //     lng: map.getCenter().lng.toFixed(4),
        //     lat: map.getCenter().lat.toFixed(4),
        //     zoom: map.getZoom().toFixed(2)
        //     });
        // });
            

    return (
        <>
            {/* <div>Longitude: {mapState.lng} | Latitude: {mapState.lat} | Zoom: {mapState.zoom}</div> */}
            <div ref={el => mapContainer = el} className="mapContainer"></div>
        </>
    )
}
