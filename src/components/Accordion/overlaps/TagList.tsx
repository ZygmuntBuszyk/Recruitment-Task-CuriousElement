import React from 'react'
import { Tag } from './Tag';

export const TagList = ({markers, removeMarker}) => {
    return (
        <div>
            {markers.map((marker, index) => (<Tag marker={marker} removeMarker={removeMarker} index={index} key={index} />))}
        </div>
    )
}