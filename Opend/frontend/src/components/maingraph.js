import React, { Component } from 'react'
import Highcharts from "highcharts/highstock";

export default class maingraph extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.params)
        this.state = { data: [] };
        
      }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
