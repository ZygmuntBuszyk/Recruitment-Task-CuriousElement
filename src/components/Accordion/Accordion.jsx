import React, {useState, useEffect, useRef, useContext, useCallback, useMemo, memo} from 'react'
import './accordion.css'

import { UncontrolledCollapse } from "reactstrap";

import { TagList } from './overlaps/TagList';
import { StreetMaps } from './overlaps/StreetMaps'
import { ContextProvider, MarkerContext } from './_context/MarkersState';

import mapboxgl from 'mapbox-gl';
import { AccessToken } from '../../_enum/accessToken.enum';

export const Accordion = () => {
    const didMountRef = useRef(false);
    // const Button = React.memo((props) => {
    //     // your component
    //   });
      
    // function useDidUpdateEffect(fn, inputs) {
    //     const didMountRef = useRef(false);
      
    //     useEffect(() => {
    //       if (didMountRef.current)
    //         fn();
    //       else
    //         didMountRef.current = true;
    //     }, inputs);
    //   }

    // let map;
    mapboxgl.accessToken = AccessToken.token;
    let mapContainer = useRef();
    const { markers } = useContext(MarkerContext);
    const { deleteMarker } = useContext(MarkerContext);
    const { addMarker }= useContext(MarkerContext);

    // console.log(addMarker)

    // const context = useContext(ContextProvider);
    // console.log(context)
    // const  { deleteMarker, addMarker ) = useContext(MarkerReducer)

    // const [markers, setState ] = useState([]); 

    const toggleTab = e => {
        e.preventDefault();
        console.log(markers);
    }
   
    // const addMarkerToState = (marker) => {
    //     // addMarker(marker);
    //     setState(markers => [...markers, marker]);
    // }

    // const addMarkerToState = useCallback((marker, e) => {
    //     // e.preventDefault()
    //     console.log(markers)
    //     setState(markers => [...markers, marker]);
    //   }, [markers])

    const addMarkerToState = marker => {
        addMarker(marker);
        // setState(markers => [...markers, marker]);
    }

    const removeMarker = (marker) => {
        deleteMarker(marker)
    }

    useEffect((e) => {
        console.log('reload')
        // if(!map) {
            const map = new mapboxgl.Map({
                container: mapContainer,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [17.038538, 51.107883],
                zoom: 12.5
            })
            map.on('click', e => {
                const marker = new mapboxgl.Marker({
                    draggable: true
                })
                .setLngLat([e.lngLat.lng, e.lngLat.lat])
                .addTo(map);
                addMarkerToState(marker);
            });
        // }
           
    }, []);

    return (
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
                    <TagList markers={markers} removeMarker={removeMarker} />
                </UncontrolledCollapse>
        
            </div>
        </div>
    )
}


