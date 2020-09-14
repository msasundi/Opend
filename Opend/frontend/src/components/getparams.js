import React from 'react'

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

class getparams extends React.Component {
    state = {
        startDate: new Date()
    };
    
    handleChange = date => {
        console.log(date);
        this.setState({
            startDate: date
        });
    };
    
    render() {
        return (
            <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            />
            );
            
        }
    }
    
    export default getparams