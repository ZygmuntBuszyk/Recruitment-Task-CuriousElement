import React from 'react'

import { UncontrolledCollapse } from "reactstrap";

import { TagList } from './overlaps/TagList';
import { StreetMaps } from './overlaps/StreetMaps'

export const Accordion = () => {
    return (
        <div className="mainContent">
            <div className="item">
                <a href="#" id="streetMapsAccordion"  onClick={e => e.preventDefault()}>
                    <p>StreetMaps</p>
                </a>
                <UncontrolledCollapse
                    role="tabpanel"
                    toggler="#streetMapsAccordion"
                    defaultOpen
                >
                    <StreetMaps />
                </UncontrolledCollapse>
            </div>
            <div className="item">
                <a href="#" id="tagListAccordion" onClick={e => e.preventDefault()}>
                    <p>TagList</p>
                </a>
                <UncontrolledCollapse role="tabpanel" toggler="#tagListAccordion">
                    <TagList />
                </UncontrolledCollapse>
           
            </div>
        </div>
    )
}
