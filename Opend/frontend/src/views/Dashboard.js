import React from 'react' 
import "react-datepicker/dist/react-datepicker.css";
// import EmailSentCount from "../components/emailSentBrokeDown"
// import EmailSentOpensClicks from "../components/emailSentOpensClicks"

import Header from "../components/navigation"
import GetData from "../components/getparams"


class Dashboard extends React.Component {
    constructor(props){
        super(props)
        console.log("this is new props");
        console.log(props);
        
    }

        state = {
            startDate: new Date(),
            endDate: new Date()
        };
    
    
    handleDateSelect = (stdate) => {
        // console.log(stdate, 'date');
          this.setState({
              startDate: stdate
          });
      };
    
    render() {
        return (
            <div>
            <Header />
            <GetData handleDateSelect={this.handleDateSelect} />
                {/* <MainGraph params={this.state.startDate} />  */}
                {/* <EmailSentCount params={this.state.startDate} />  */}
                {/* <EmailSentOpensClicks params={this.state.startDate} />  */}
              </div>    
            );
            
        }
    }
    
    export default Dashboard