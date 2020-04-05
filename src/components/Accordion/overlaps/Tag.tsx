import React, { useContext } from 'react'
import './tag.css'
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { MarkerContext } from '../_context/MarkersState';

export const Tag = ({ marker, removeMarker, index }) => {
    marker.index = index;
    const { updateMarker } = useContext(MarkerContext);

    const onDragEnd = () => {
        updateMarker(marker)
    }

    marker.on('dragend', onDragEnd);
    
    return (
        <div>
            <Breadcrumb>
                <div>
                    <BreadcrumbItem>{marker._lngLat.lng}</BreadcrumbItem>
                    <BreadcrumbItem>{marker._lngLat.lat}</BreadcrumbItem>
                </div>
                <Button className="btn-round btn-icon" color="primary" onClick={e => removeMarker(marker)}>
                    <i className="fa fa-times" />
                </Button>
            </Breadcrumb>
        </div>
    )
}
