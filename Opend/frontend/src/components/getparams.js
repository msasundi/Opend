import React, { Component } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import MainGraph from "../components/maingraph"

 class getparams extends Component {
    constructor(props) {
        super(props);
        console.log(props)
      }
        state ={
            selcted_date:'Today',
            selcted_campaign:'All Campaigns'
        }


        handleSelectdate = (stdate) => {
          this.setState({
              selcted_date: stdate
          });
      };



      handleSelectCampaigns = (stcamp) => {
          this.setState({
              selcted_campaign: stcamp
          });
      };


    render() {
        return (
            <div>

                <DropdownButton
                  alignRight
                      title={this.state.selcted_date}
                        id="dropdown-menu-align-right11"
                            onSelect={this.handleSelectdate}
                >
                  <Dropdown.Item eventKey="Today">Today</Dropdown.Item>
                  <Dropdown.Item eventKey="Yesterday">Yesterday</Dropdown.Item>
                  <Dropdown.Item eventKey="This Week">This Week</Dropdown.Item>
                  <Dropdown.Item eventKey="This Month">This Month</Dropdown.Item>
                  <Dropdown.Item eventKey="Last Month">Last Month</Dropdown.Item>
                  <Dropdown.Item eventKey="Life Time">Life Time</Dropdown.Item>
                 </DropdownButton>
                 
                 <DropdownButton
                  alignRight
                      title={this.state.selcted_campaign}
                        id="dropdown-menu-align-right-1"
                            onSelect={this.handleSelectCampaigns}
                >
                  <Dropdown.Item eventKey="All Campaigns">All Campaigns </Dropdown.Item>
                  <Dropdown.Item eventKey="Normal">Normal</Dropdown.Item>
                  <Dropdown.Item eventKey="Recurring">Recurring</Dropdown.Item>
                 </DropdownButton>
                 
                 <MainGraph filterData={this.state.selcted_date} getcampaigntype={this.state.selcted_campaign}/>
            </div>
        )
    }
}


export default getparams