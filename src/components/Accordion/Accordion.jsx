import React, {useState, useEffect, useRef, useContext} from 'react'
import './accordion.css'

import { UncontrolledCollapse } from "reactstrap";

import { TagList } from './overlaps/TagList';
import { StreetMaps } from './overlaps/StreetMaps'
import { ContextProvider, MarkerContext } from './_context/MarkersState';

import mapboxgl from 'mapbox-gl';
import { AccessToken } from '../../_enum/accessToken.enum';

export const Accordion = () => {
    mapboxgl.accessToken = AccessToken.token;
    let mapContainer = useRef();
    const { markers } = useContext(MarkerContext);

    // const [markerState, setState ] = useState([]); 

           


    const toggleTab = e => {
        e.preventDefault();
        console.log(markers);
    }
    
  
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [17.038538, 51.107883],
            zoom: 12.5
        })

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
            // map.container = mapContainer;
            // map.style =  'mapbox://styles/mapbox/streets-v11';
            // map.center = [17.038538, 51.107883];
            // map.zoom =  12.5;
    });


    return (
        <ContextProvider>
            <div className="mainContent">
                <div className="item">
                    <a href="#" id="streetMapsAccordion" onClick={e => toggleTab(e)}>
                        <p>StreetMaps</p>
                    </a>
                    <UncontrolledCollapse
                        className="tabpanel"
                        role="tabpanel"
                        toggler="#streetMapsAccordion"
                        defaultOpen
                    >
                        {/* <StreetMaps {...props}/> */}
                        <div ref={el => mapContainer = el} className="mapContainer"></div>
                    </UncontrolledCollapse>
                </div>
                <div className="item">
                    <a href="#" id="tagListAccordion" onClick={e => toggleTab(e)}>
                        <p>TagList</p>
                    </a>
                    <UncontrolledCollapse className="tabpanel" role="tabpanel" toggler="#tagListAccordion">
                        <TagList />
                    </UncontrolledCollapse>
            
                </div>
            </div>
        </ContextProvider>
    )
}
