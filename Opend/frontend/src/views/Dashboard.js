// @flow
import * as React from 'react';
// import EmailSentCount from "../components/emailSentBrokeDown"
// import EmailSentOpensClicks from "../components/emailSentOpensClicks"
import MainGraph from "../components/maingraph"
import Getparams from "../components/getparams"

export function Dashboard(props) {
  const data = props.match.params;
  
  return (
    <div>
     <Getparams params={data} /> 
     {/* <MainGraph params={data} /> */}
     {/* <EmailSentCount params={data} /> */}
     {/* <EmailSentOpensClicks params={data} /> */}
     
    </div>
  );
};

export default Dashboard;