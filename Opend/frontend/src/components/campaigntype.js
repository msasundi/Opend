
import React from "react";
import MainGraph from "../components/maingraph"
 
function Campaigntype(props) {
  
  return (
    <div>
      <div>
      <MainGraph filterData={props.getcampaindate} getcampaigntype={props.getcampaigntype}/>
      </div>
    </div>
  );
};

export default (Campaigntype) 
