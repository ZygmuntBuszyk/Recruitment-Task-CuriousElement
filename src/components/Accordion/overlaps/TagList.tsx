import React, { useContext } from 'react'
import { MarkerContext } from '../_context/MarkersState';
import { Tag } from './Tag';

export const TagList = () => {
    const { markers } = useContext(MarkerContext);

    return (
        <>
            {markers.map(marker => <Tag marker={marker} />)}
        </>
    )
}
