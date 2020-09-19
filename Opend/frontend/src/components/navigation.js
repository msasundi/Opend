import React from 'react'
import {Card, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function navigation(){
    return (
        <div>
                <Card>
                <Card.Header>
                    <Nav variant="pills" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#campaigns">Campaigns</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#advertisers">Advertisers</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#publishers">Publishers</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#Domains ">Domains</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#apis">API's</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Card.Header>
                </Card>
        </div>
    )
}
