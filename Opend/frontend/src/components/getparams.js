import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class getparams extends Component {
    constructor(props) {
        super(props);
        this.state ={
            dates:{
                startDate : new Date(),
            },
        }
      }

    setStartDate = (date) =>{
        this.setState({
            dates:{
                startDate : date
            }
        })
    }

    render() {
        return (
            <div>
                    <DatePicker
                        selected={this.state.dates.startDate}
                        onChange={(date) => {this.setStartDate(date);this.props.handleDateSelect(date);}}
                        startDate={this.state.startDate}
                    />
            </div>
        )
    }
}
