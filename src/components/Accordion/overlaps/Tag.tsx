import React from 'react'
import './tag.css'
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { MarkerActions } from "../../../_enum/context/markerActions.enum";

export const Tag = ({marker}) => {
    const removeMarker = (e) =>{
        console.log(e.target)
        
    }

    return (
        <Breadcrumb>
            <div>
                <BreadcrumbItem>  {marker.lat}</BreadcrumbItem>
                <BreadcrumbItem>  {marker.lng}</BreadcrumbItem>
            </div>
            <Button className="btn-round btn-icon" color="primary" onClick={e => removeMarker(e)}>
                <i className="fa fa-times" />
            </Button>
        </Breadcrumb>
    )
}
