import React from 'react'
import { TagList } from './overlaps/TagList';
import { StreetMaps } from './overlaps/StreetMaps'

export const Accordion = () => {
    return (
        <div>
            <p>Street Maps: </p>
            <StreetMaps />
            <p>Tag list: </p>
            <TagList />
        </div>
    )
}
