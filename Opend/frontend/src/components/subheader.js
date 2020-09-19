import React from 'react'
import { DropdownButton , Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function subheader() {
    return (
        <div>
            <DropdownButton style={{float: 'right'}} id="dropdown-item-button" title="Dropdown button">
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>            
        </div>
    )
}
