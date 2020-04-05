import React from 'react'
import './tag.css'
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';

export const Tag = ({marker, removeMarker}) => {

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
