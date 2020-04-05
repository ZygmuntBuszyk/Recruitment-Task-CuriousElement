import React, {useEffect, useRef, useContext, useState} from 'react'
import './accordion.css'
import { UncontrolledCollapse } from "reactstrap";
import { TagList } from './overlaps/TagList';
import { MarkerContext } from './_context/MarkersState';
import mapboxgl from 'mapbox-gl';
import { AccessToken } from '../../_enum/accessToken.enum';

export const Accordion = () => {
    mapboxgl.accessToken = AccessToken.token;
    let mapContainer:any = useRef();
    const { markers, deleteMarker, addMarker } = useContext(MarkerContext);

    const [ state, setState ] = useState({
        mapActive: true,
        tagListActive: true
    });

    const toggleTab = (e, el) => {
        e.preventDefault();
        if(el === 'StreetMaps') {
            setState({
                mapActive: !state.mapActive,
                tagListActive: state.tagListActive
            })
        } 
        else { 
            setState({
                mapActive: state.mapActive,
                tagListActive: !state.tagListActive
            })
        }
    }

    const addMarkerToontext = marker => {
        addMarker(marker);
    }

    const removeMarker = (marker) => {
        deleteMarker(marker);
        marker.remove();
    }

    useEffect(() => {
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
            addMarkerToontext(marker);
        });
    }, []);

    return (
        <div className="mainContent">
            <div className="item">
                <a href="#" id="streetMapsAccordion" onClick={e => toggleTab(e, 'StreetMaps')}>
                    <p className={state.mapActive ? 'active': ''}>StreetMaps</p>
                </a>
                <UncontrolledCollapse
                    className="tabpanel"
                    role="tabpanel"
                    toggler="#streetMapsAccordion"
                    defaultOpen
                >
                    <div ref={el => mapContainer = el} className="mapContainer"></div>
                </UncontrolledCollapse>
            </div>
            <div className="item">
                <a href="#" id="tagListAccordion" onClick={e => toggleTab(e, 'TagList')}>
                    <p className={state.tagListActive ? 'active': ''}>TagList</p>
                </a>
                <UncontrolledCollapse className="tabpanel tagList" role="tabpanel" toggler="#tagListAccordion" defaultOpen>
                    <TagList markers={markers} removeMarker={removeMarker} />
                </UncontrolledCollapse>
            </div>
        </div>
    )
}