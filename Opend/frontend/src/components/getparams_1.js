import React from 'react' 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




class getparams extends React.Component {
    
    // this.state:
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { dates:{
                startDate: "",
                endDate : ""
            }
         };
        // this.handleClick = this.handleClick.bind(this);
      }


    onChange = (dates) => {
        console.log(dates + "my DATES");
          this.setState({
              startDate = dates.startDate,
              endDate = dates.endDate
          });
      };
    
    render() {
        return (
            <div>
            
            <DatePicker
      selected={this.state.dates.endDate}
      onChange={this.onChange}
      startDate={this.state.dates.startDate}
      endDate={this.state.dates.endDate}
      selectsRange
      inline
    />
            </div>    
            );
            
        }
    }
    
    export default getparams


